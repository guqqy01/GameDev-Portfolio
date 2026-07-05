import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { GamePageSection, GamePageSidebarSection, ProjectPageConfig, TopbarTab } from '../../types';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const collectSectionTabs = (section: GamePageSidebarSection) => section.sections;

// How far from the top of the viewport counts as the "active" reading line.
// Roughly clears the sticky topbar (48px) plus a little breathing room.
const TRIGGER_LINE = 100;

// How far below the top of the viewport a section should land when you
// click it in the sidebar — gives some breathing room under the topbar
// instead of snapping the heading right to the very edge of the screen.
// Keep this comfortably under TRIGGER_LINE, or the section you just
// clicked won't register as "active" until you scroll further.
const SCROLL_LANDING_OFFSET = 80;

type ProjectPageProps = {
  config: ProjectPageConfig;
};

function ProjectPage({ config }: ProjectPageProps) {
  const sectionTabs = useMemo(() => collectSectionTabs(config.sections), [config.sections]);
  const initialSection = sectionTabs.find((tab) => tab.content)?.key ?? sectionTabs[0]?.key ?? '';
  const [currentTab, setCurrentTab] = useState<string>(initialSection);

  // Holds the actual DOM nodes for every rendered <section>, keyed by tab key.
  const sectionElements = useRef<Map<string, HTMLElement>>(new Map());
  // Cache of ref-callback functions so each one keeps a stable identity across
  // renders (otherwise React would unregister/re-register every section on
  // every render).
  const sectionRefCallbacks = useRef<Map<string, (el: HTMLElement | null) => void>>(new Map());
  // Wraps every rendered section — watched by a ResizeObserver so we can
  // detect layout shifts (e.g. images finishing loading) that happen
  // without any actual scrolling.
  const sectionsContainerRef = useRef<HTMLDivElement | null>(null);

  // While true, scroll/resize-triggered recalculation is ignored — used
  // while a programmatic scrollTo (from a sidebar click) is animating.
  const suppressScrollSpy = useRef(false);
  const scrollEndTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafId = useRef<number | null>(null);

  const getSectionRef = useCallback((key: string) => {
    if (!sectionRefCallbacks.current.has(key)) {
      sectionRefCallbacks.current.set(key, (el: HTMLElement | null) => {
        if (el) {
          sectionElements.current.set(key, el);
        } else {
          sectionElements.current.delete(key);
        }
      });
    }
    return sectionRefCallbacks.current.get(key)!;
  }, []);

  // Classic scroll-spy rule: among sections whose top has already scrolled
  // above TRIGGER_LINE, pick the one whose top is closest to the line (the
  // largest top value that still qualifies). A section that's mostly
  // scrolled away has a very negative top and can never win this comparison.
  const updateActiveSection = useCallback(() => {
    const entries = Array.from(sectionElements.current.entries());
    if (entries.length === 0) return;

    let bestKey: string | null = null;
    let bestTop = -Infinity;

    entries.forEach(([key, el]) => {
      const top = el.getBoundingClientRect().top;
      if (top <= TRIGGER_LINE && top > bestTop) {
        bestTop = top;
        bestKey = key;
      }
    });

    // Nothing has reached the line yet — e.g. page just loaded at the very
    // top, above the first section. Default to the first section.
    if (!bestKey) {
      bestKey = entries[0][0];
    }

    setCurrentTab(bestKey);
  }, []);

  // Throttled wrapper so scroll and resize events both funnel through
  // at most once per animation frame, regardless of how often they fire.
  const scheduleUpdate = useCallback(() => {
    if (suppressScrollSpy.current) return;
    if (rafId.current !== null) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      updateActiveSection();
    });
  }, [updateActiveSection]);

  const handleSectionSelect = (sectionKey: string) => {
    setCurrentTab(sectionKey);
    suppressScrollSpy.current = true;

    const element = sectionElements.current.get(sectionKey);
    if (element) {
      const targetTop = element.getBoundingClientRect().top + window.scrollY - SCROLL_LANDING_OFFSET;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }

    // Clean up any previous in-flight listener before starting a new one.
    if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);

    // Release suppression once scrolling has actually stopped — detected by
    // waiting for a gap with no 'scroll' events, rather than guessing a fixed
    // duration that may be too short (long scrolls) or too long (short ones).
    const onScroll = () => {
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
      scrollEndTimeout.current = setTimeout(() => {
        suppressScrollSpy.current = false;
        window.removeEventListener('scroll', onScroll);
        updateActiveSection();
      }, 150);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // also start the timer immediately, in case the scroll is a no-op
  };

  useEffect(() => {
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    updateActiveSection();

    // Watches for layout shifts caused by anything finishing after mount —
    // async-loading screenshots being the main culprit — and re-runs the
    // same positional check used for real scrolling. This is what catches
    // the "correct tab, then wrong tab a moment later" bug: it wasn't a
    // scroll at all, it was the page growing underneath you.
    let resizeObserver: ResizeObserver | null = null;
    if (sectionsContainerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        scheduleUpdate();
      });
      resizeObserver.observe(sectionsContainerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      resizeObserver?.disconnect();
    };
  }, [sectionTabs, scheduleUpdate, updateActiveSection]);

  const renderSections = (tabs: GamePageSection[]) =>
    tabs.map((tab) => (
      <div key={tab.key}>
        {(tab.header || tab.content || tab.children) && (
          <section id={tab.key} ref={getSectionRef(tab.key)} className="page-section">
            {tab.header ? (
              tab.header
            ) : (
              <div className="section-header">
                <div className="hero-eyebrow">// {tab.label.toUpperCase()}</div>
                <h2 className="section-heading">{tab.label}</h2>
              </div>
            )}
            <div className="section-copy">{tab.content}</div>
          </section>
        )}

        {tab.children && (
          <div className="section-children">{renderSections(tab.children)}</div>
        )}
      </div>
    ));

  return (
    <div>
      <Header
        returnTo={() => window.history.back()}
        logo={config.logo}
        tabs={[] as TopbarTab[]}
        rightBar="OPEN TO WORK"
        onSwitchTab={setCurrentTab}
        currentTab={currentTab}
      />

      <div className="layout2">
        <Sidebar onClick={handleSectionSelect} currentTab={currentTab} gamePageSections={config.sections} />
        <div className="view" id={config.viewId}>
          <div className="page-sections" ref={sectionsContainerRef}>
            {renderSections(sectionTabs)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;