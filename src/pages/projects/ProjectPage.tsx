import { useMemo, useState } from 'react';
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

  const handleSectionSelect = (sectionKey: string) => {
    setCurrentTab(sectionKey);
    const element = document.getElementById(sectionKey);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderSections = (tabs: GamePageSection[]) =>
  tabs.map((tab) => (
    <div key={tab.key}>
      {(tab.header || tab.content || tab.children) && (
        <section id={tab.key} className="page-section">
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
