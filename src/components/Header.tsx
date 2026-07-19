import type { TopbarTab as TopbarTabType } from '../types';

type TopbarTabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

type TopbarProps = {
  returnTo?: () => void;
  logo?: string;
  tabs: TopbarTabType[];
  rightBar?: string;
  onSwitchTab: (key: string) => void;
  currentTab: string;
};

function TopbarTabButton({ label, isActive, onClick }: TopbarTabProps) {
  return (
    <button
      type="button"
      className={isActive ? 'tab active' : 'tab'}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="dot"></span> {label}
    </button>
  );
}

function Header({ returnTo, logo = '◆ Guqqy.dev', tabs, rightBar = 'OPEN TO WORK', onSwitchTab, currentTab }: TopbarProps) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        {returnTo && (
          <button className="tab" onClick={returnTo}>
            ← Return
          </button>
        )}
        <span className="topbar-logo">{logo}</span>
        <nav className="topbar-tabs" aria-label="Section navigation">
          {tabs.map((tab) => (
            <TopbarTabButton
              key={tab.key}
              label={tab.label}
              isActive={currentTab === tab.key}
              onClick={() => onSwitchTab(tab.key)}
            />
          ))}
        </nav>
      </div>
      <div className="status-bar-right">
        <span className="status-pill">{rightBar}</span>
      </div>
    </div>
  );
}

export default Header;
