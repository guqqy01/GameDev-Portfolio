import { useState } from 'react';
import GameCard from '../../components/gamecard';
import PortfolioLeftSidebar from '../../components/portfolioleftsidebar'; 
import { games } from '../../data/games';

function Portfolio() {

    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <div className="layout2">
            <PortfolioLeftSidebar onFilter={setActiveFilter} currentFilter={activeFilter} />
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