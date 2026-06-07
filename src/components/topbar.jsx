
function TopbarTab({Label, isActive, onClick}){
    return (
        <button 
            className={isActive ? 'tab active' : 'tab'}
            onClick={onClick}>
            <span className="dot"></span> {Label}
        </button>
    );
}

function Topbar({ onSwitchTab, currentTab }) {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <span className="topbar-logo">◆ Dale Gush.dev</span>
                <div className="topbar-tabs">
                    <TopbarTab
                        Label="PORTFOLIO"
                        isActive={currentTab === 'portfolio'}
                        onClick={() => onSwitchTab('portfolio')}
                    />
                    <TopbarTab
                        Label="ABOUT"
                        isActive={currentTab === 'about'}
                        onClick={() => onSwitchTab('about')}
                    />
                    <TopbarTab
                        Label="CONTACT"
                        isActive={currentTab === 'contact'}
                        onClick={() => onSwitchTab('contact')}
                    />
                </div>
            </div>
            <div className="status-bar-right">
                <span className="status-pill">OPEN TO WORK</span>
            </div>
        </div>
    );
}

export default Topbar;