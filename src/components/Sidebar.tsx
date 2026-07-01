import { useEffect, useRef, useState } from 'react';
import type {
  GamePageSidebarSection,
  SidebarSection,
  SidebarTab as SidebarTabType,
} from '../types';

type SidebarTabProps = {
  tabKey: string;
  label: string;
  icon?: string;
  active: boolean;
  onClick: (key: string) => void;
  children?: SidebarTabType[];
  isExpanded: boolean;
  onToggle?: () => void;
  currentTab: string;
};

type SidebarSectionProps = {
  label: string;
  sidebarTabs: SidebarTabType[];
  onClick: (key: string) => void;
  currentTab: string;
};

type SidebarProps = {
  onClick: (key: string) => void;
  currentTab: string;
  sideBarSections?: SidebarSection[];
  gamePageSections?: GamePageSidebarSection;
};

const createSidebarTabs = (section: GamePageSidebarSection): SidebarSection[] => [
  {
    label: section.label,
    sidebarTabs: section.sections.map((sectionTab) => {
      const buildTab = (tab: GamePageSidebarSection['sections'][number]): SidebarTabType => ({
        key: tab.key,
        label: tab.label,
        icon: tab.icon,
        children: tab.children?.map(buildTab),
      });

      return buildTab(sectionTab);
    }),
  },
];

// Recursively checks whether `key` is the tab itself or lives somewhere
// inside its children — used to find which branch needs to stay open.
function containsKey(tab: SidebarTabType, key: string): boolean {
  if (tab.key === key) return true;
  if (!tab.children) return false;
  return tab.children.some((child) => containsKey(child, key));
}

// Given a flat list of sibling tabs, returns which of them contain
// currentTab somewhere in their branch — these need to be open.
function computeAutoOpenKeys(tabs: SidebarTabType[], currentTab: string): Set<string> {
  const open = new Set<string>();
  tabs.forEach((tab) => {
    if (tab.children && tab.children.length > 0 && containsKey(tab, currentTab)) {
      open.add(tab.key);
    }
  });
  return open;
}

function SidebarTab({ tabKey, label, icon, active, onClick, children, isExpanded, onToggle, currentTab }: SidebarTabProps) {
  const hasChildren = children && children.length > 0;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  // Branches the user explicitly opened by hand — these stay open even
  // when the scroll-spy's active path moves elsewhere. Cleared again the
  // moment the user manually closes that same branch.
  const manuallyExpanded = useRef<Set<string>>(new Set());

  // Auto-expand/collapse this tab's own children based on where currentTab
  // lives, but never force-close a branch the user pinned open by hand.
  useEffect(() => {
    if (!children) return;
    const autoOpen = computeAutoOpenKeys(children, currentTab);
    setExpanded(() => {
      const next: Record<string, boolean> = {};
      children.forEach((child) => {
        if (!child.children || child.children.length === 0) return;
        next[child.key] = autoOpen.has(child.key) || manuallyExpanded.current.has(child.key);
      });
      return next;
    });
  }, [currentTab, children]);

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => {
      const nextValue = !prev[key];
      if (nextValue) {
        manuallyExpanded.current.add(key);
      } else {
        manuallyExpanded.current.delete(key);
      }
      return { ...prev, [key]: nextValue };
    });
  };

  const handleTabClick = () => {
    onClick(tabKey);
    if (hasChildren && !isExpanded) {
      onToggle?.();
    }
  };

  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle?.();
  };

  return (
    <div>
      <button
        className={active ? 'sidebar-item active' : 'sidebar-item'}
        onClick={handleTabClick}
        style={{ justifyContent: 'space-between' }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="icon">{icon}</span>
          {label}
        </span>
        {hasChildren && (
          <span
            className="sidebar-collapse-toggle"
            style={{ fontSize: '9px', opacity: 0.5 }}
            onClick={handleArrowClick}
          >
            {isExpanded ? '▼' : '▶'}
          </span>
        )}
      </button>

      {hasChildren && isExpanded && (
        <div style={{ paddingLeft: '16px' }}>
          {children?.map((child) => {
            const childProps: SidebarTabProps = {
              tabKey: child.key,
              label: child.label,
              icon: child.icon,
              active: currentTab === child.key,
              onClick: onClick,
              children: child.children,
              isExpanded: !!expanded[child.key],
              onToggle: () => toggleExpanded(child.key),
              currentTab: currentTab,
            };

            return <SidebarTab key={child.key} {...childProps} />;
          })}
        </div>
      )}
    </div>
  );
}

function SidebarSection({ label, sidebarTabs, onClick, currentTab }: SidebarSectionProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const manuallyExpanded = useRef<Set<string>>(new Set());

  useEffect(() => {
    const autoOpen = computeAutoOpenKeys(sidebarTabs, currentTab);
    setExpanded(() => {
      const next: Record<string, boolean> = {};
      sidebarTabs.forEach((tab) => {
        if (!tab.children || tab.children.length === 0) return;
        next[tab.key] = autoOpen.has(tab.key) || manuallyExpanded.current.has(tab.key);
      });
      return next;
    });
  }, [currentTab, sidebarTabs]);

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => {
      const nextValue = !prev[key];
      if (nextValue) {
        manuallyExpanded.current.add(key);
      } else {
        manuallyExpanded.current.delete(key);
      }
      return { ...prev, [key]: nextValue };
    });
  };

  return (
    <div className="sidebar-section">
      <div className="sidebar-label">{label}</div>
      {sidebarTabs.map((tab) => {
        const tabProps: SidebarTabProps = {
          tabKey: tab.key,
          label: tab.label,
          icon: tab.icon,
          active: currentTab === tab.key,
          onClick: onClick,
          children: tab.children,
          isExpanded: !!expanded[tab.key],
          onToggle: () => toggleExpanded(tab.key),
          currentTab: currentTab,
        };

        return <SidebarTab key={tab.key} {...tabProps} />;
      })}
    </div>
  );
}

function Sidebar({ onClick, currentTab, sideBarSections, gamePageSections }: SidebarProps) {
  const resolvedSections = gamePageSections ? createSidebarTabs(gamePageSections) : sideBarSections ?? [];

  return (
    <div className="sidebar">
      {resolvedSections.map((section) => (
        <SidebarSection
          key={section.label}
          label={section.label}
          sidebarTabs={section.sidebarTabs}
          currentTab={currentTab}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

export default Sidebar;