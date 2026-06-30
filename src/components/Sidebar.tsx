import { useState } from 'react';
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

function SidebarTab({ tabKey, label, icon, active, onClick, children, isExpanded, onToggle, currentTab }: SidebarTabProps) {
  const hasChildren = children?.length > 0;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
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

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
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
