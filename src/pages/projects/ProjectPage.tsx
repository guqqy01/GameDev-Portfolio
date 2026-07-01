import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { GamePageSection, GamePageSidebarSection, ProjectPageConfig, TopbarTab } from '../../types';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const collectSectionTabs = (section: GamePageSidebarSection) => section.sections;

type ProjectPageProps = {
  config: ProjectPageConfig;
};

function ProjectPage({ config }: ProjectPageProps) {
  const sectionTabs = useMemo(() => collectSectionTabs(config.sections), [config.sections]);
  const initialSection = sectionTabs.find((tab) => tab.content)?.key ?? sectionTabs[0]?.key ?? '';
  const [currentTab, setCurrentTab] = useState<string>(initialSection);

  const sectionElements = useRef<Map<string, HTMLElement>>(new Map());
  const sectionRefCallbacks = useRef<Map<string, (el: HTMLElement | null) => void>>(new Map());

  // Persistent record of "is this section currently in the active band?" —
  // updated incrementally from each observer callback rather than replaced,
  // since a single callback only reports elements that just crossed a threshold.
  const visibilityState = useRef<Map<string, boolean>>(new Map());

  const suppressObserver = useRef(false);
  const scrollEndTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollEndListener = useRef<(() => void) | null>(null);

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

  // Looks at the full visibility map (not just the latest callback batch)
  // and picks whichever visible section is closest to the top of the page.
  const applyTopmostVisible = () => {
    let bestKey: string | null = null;
    let bestTop = Infinity;

    visibilityState.current.forEach((isVisible, key) => {
      if (!isVisible) return;
      const el = sectionElements.current.get(key);
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top < bestTop) {
        bestTop = top;
        bestKey = key;
      }
    });

    if (bestKey) setCurrentTab(bestKey);
  };

  const handleSectionSelect = (sectionKey: string) => {
    setCurrentTab(sectionKey);
    suppressObserver.current = true;

    const element = sectionElements.current.get(sectionKey);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Clean up any previous in-flight listener before starting a new one.
    if (scrollEndListener.current) {
      window.removeEventListener('scroll', scrollEndListener.current);
    }
    if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);

    // Release suppression once scrolling has actually stopped — detected by
    // waiting for a gap with no 'scroll' events, rather than guessing a fixed
    // duration that may be too short (long scrolls) or too long (short ones).
    const onScroll = () => {
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
      scrollEndTimeout.current = setTimeout(() => {
        suppressObserver.current = false;
        window.removeEventListener('scroll', onScroll);
        scrollEndListener.current = null;
        // Reconcile once more in case the observer missed anything while suppressed.
        applyTopmostVisible();
      }, 150);
    };

    scrollEndListener.current = onScroll;
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // also start the timer immediately, in case the scroll is a no-op
  };

  useEffect(() => {
    const entries = Array.from(sectionElements.current.entries());
    if (entries.length === 0) return;

    const observer = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((entry) => {
          const match = entries.find(([, el]) => el === entry.target);
          if (match) visibilityState.current.set(match[0], entry.isIntersecting);
        });

        if (suppressObserver.current) return;
        applyTopmostVisible();
      },
      {
        root: null,
        rootMargin: '-96px 0px -65% 0px',
        threshold: 0,
      }
    );

    entries.forEach(([, el]) => observer.observe(el));

    return () => {
      observer.disconnect();
      if (scrollEndListener.current) window.removeEventListener('scroll', scrollEndListener.current);
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
    };
  }, [sectionTabs]);

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
          <div className="page-sections">{renderSections(sectionTabs)}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;