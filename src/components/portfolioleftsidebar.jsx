

function PortfolioLeftSidebar({ onFilter }) {
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <div className="sidebar-label">SCENE EXPLORER</div>
                <button className="sidebar-item" onClick={() => onFilter('all')}>
                    <span className="icon">▣</span> All Projects
                </button>
                <button className="sidebar-item" onClick={() => onFilter('commercial')}>
                    <span className="icon">◈</span> Commercial
                </button>
                <button className="sidebar-item" onClick={() => onFilter('proto')}>
                    <span className="icon">◇</span> Prototypes
                </button>
            </div>

            <div className="sidebar-section">
                <div className="sidebar-label">FILTER BY TAG</div>
                <button className="sidebar-item" onClick={() => onFilter('Unity')}>
                    <span className="icon">◉</span> Unity
                </button>
                <button className="sidebar-item" onClick={() => onFilter('Godot')}>
                    <span className="icon">◉</span> Godot
                </button>
                <button className="sidebar-item" onClick={() => onFilter('C#')}>
                    <span className="icon">◉</span> C#
                </button>
                <button className="sidebar-item" onClick={() => onFilter('2D')}>
                    <span className="icon">◉</span> 2D
                </button>
                <button className="sidebar-item" onClick={() => onFilter('3D')}>
                    <span className="icon">◉</span> 3D
                </button>
            </div>

            <div className="sidebar-section">
                <div className="sidebar-label">LINKS</div>
                <a className="sidebar-item" href="https://github.com/YOURUSERNAME" target="_blank">
                    <span className="icon">⇗</span> GitHub
                </a>
                <a className="sidebar-item" href="https://YOURUSERNAME.itch.io" target="_blank">
                    <span className="icon">⇗</span> itch.io
                </a>
            </div>
        </div>
    );
}

export default PortfolioLeftSidebar;