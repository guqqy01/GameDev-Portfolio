import { useState } from 'react';
import GameCard from '../../components/gamecard';
import LeftSidebar from '../../components/portfolioleftsidebar'; 
import { games } from '../../data/games';

function Portfolio() {

    const [activeFilter, setActiveFilter] = useState('all');
    const sideBarSections = [
        {   
            label: 'Scene Explorer', 
            sidebarTabs:
            [
                { 
                    key: 'all', 
                    label: 'All Projects',
                    icon: "◉"
                },
            ] 
        },
        {   
            label: 'Filter By Tag', 
            sidebarTabs:
            [
                { 
                    key: 'unity', 
                    label: 'Unity',
                    icon: "◉"
                },
                { 
                    key: 'godot', 
                    label: 'Godot',
                    icon: "◉"
                },
                { 
                    key: 'csharp', 
                    label: 'C#',
                    icon: "◉"
                },
                { 
                    key: '2d', 
                    label: '2D',
                    icon: "◉"
                },
                { 
                    key: '3d', 
                    label: '3D',
                    icon: "◉"
                },
            ] 
        },
    ];
    return (
        <div className="layout2">
            <LeftSidebar onFilter={setActiveFilter} currentFilter={activeFilter} sideBarSections={sideBarSections} />
            <div className="view" id="view-portfolio">
                <div className="hero">
                    <div className="hero-eyebrow">// GAME DEVELOPER — C# — NEW ZEALAND</div>
                    <div className="hero-name">Dale <span>Gush</span></div>
                    <div className="hero-title">INDIE DEVELOPER & DESIGNER</div>
                    <div className="hero-bio">
                        I build games with a focus on tight mechanics, expressive visuals, and
                        moments that stay with players long after they stop playing.
                    </div>
                </div>

                <div className="stat-grid">
                    <div className="stat"><div className="stat-val">12</div><div className="stat-label">PROJECTS</div></div>
                    <div className="stat"><div className="stat-val">5</div><div className="stat-label">GAME JAMS</div></div>
                    <div className="stat"><div className="stat-val">3</div><div className="stat-label">YEARS EXP</div></div>
                    <div className="stat"><div className="stat-val">2</div><div className="stat-label">SHIPPED</div></div>
                </div>

                <div className="section-title">GAMES</div>

                <div className="games-grid">
                    {games.map(game => (
                        <GameCard
                            key={game.id}
                            title={game.title}
                            genre={game.genre}
                            description={game.description}
                            engine={game.engine}
                            tags={game.tags}
                            href={game.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;