
function TopbarTab({label, isActive, onClick}){
    return (
        <button 
            className={isActive ? 'tab active' : 'tab'}
            onClick={onClick}>
            <span className="dot"></span> {label}
        </button>
    );
}

function Topbar({returnTo, logo = "◆ Dale Gush.dev", tabs, rightBar = "OPEN TO WORK", onSwitchTab, currentTab }) {
    return (
        <div className="topbar">
            <div className="topbar-left">
                {returnTo && (
                    <button className="tab" onClick={returnTo}>
                        ← Return
                    </button>
                )}
                <span className="topbar-logo">{logo}</span>
                <div className="topbar-tabs">
                    {tabs.map(tab => (
                        <TopbarTab
                        key={tab.key}
                        label={tab.label}
                        isActive={currentTab === tab.key}
                        onClick={() => onSwitchTab(tab.key)}
                        />
                    ))}
                    </div>
            </div>
            <div className="status-bar-right">
                <span className="status-pill">{rightBar}</span>
            </div>
        </div>
    );
}

export default Topbar;