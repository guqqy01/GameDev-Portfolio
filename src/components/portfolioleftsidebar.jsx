
function SidebarTab({ label, icon, active, onClick }){
    return(
        <button className={active ? "sidebar-item active" : "sidebar-item"} onClick={onClick}>
            <span className="icon">{icon}</span> {label}
        </button>
    );
}

function SidebarSection({ label, sidebarTabs, onFilter, currentFilter })
{
    return (
        <div className="sidebar-section">
            <div className="sidebar-label">{label}</div>
            <div>
                    {sidebarTabs.map(tab => (
                        <SidebarTab
                        key={tab.key}
                        label={tab.label}
                        icon={tab.icon}
                        active={currentFilter === tab.key}
                        onClick={() => onFilter(tab.key)}
                        />
                    ))}
                </div>
        </div>
    );
}
 
function LeftSidebar({ onFilter, currentFilter, sideBarSections }) {
    return (
        <div className="sidebar">
            {sideBarSections.map((section) => (
                <SidebarSection
                    key={section.label}
                    label={section.label}
                    sidebarTabs={section.sidebarTabs}
                    currentFilter={currentFilter}
                    onFilter={onFilter}
                />
            ))}
        </div>
    );
}

export default LeftSidebar;