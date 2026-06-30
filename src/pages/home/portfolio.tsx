import { useState } from 'react';
import type { Game } from '../../types';
import GameCard from '../../components/GameCard';
import Sidebar from '../../components/Sidebar';
import { games } from '../../data/gamesCatalog';
import { portfolioSidebarSections } from '../../data/portfolioNavigation';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const visibleGames = activeFilter === 'all'
    ? games
    : games.filter((game) =>
        game.tags.some((tag) => tag.toLowerCase() === activeFilter.toLowerCase()) ||
        game.engine.toLowerCase() === activeFilter.toLowerCase()
      );

  return (
    <div className="layout2">
      <Sidebar
        onClick={setActiveFilter}
        currentTab={activeFilter}
        sideBarSections={portfolioSidebarSections}
      />
      <div className="view" id="view-portfolio">
        <div className="hero">
          <div className="hero-eyebrow">// GAME DEVELOPER — C# — NEW ZEALAND</div>
          <div className="hero-name">Dale <span>Gush</span></div>
          <div className="hero-title">INDIE DEVELOPER & DESIGNER</div>
          <div className="hero-bio">
            I build games with a focus on tight mechanics, expressive visuals, and
            moments that stay with players long after they stop playing.
            <br/>
            <br/>
            If you want to see more of a specific project, click one of the cards below.
          </div>
        </div>

        <div className="stat-grid">
          <div className="stat"><div className="stat-val">{games.length}</div><div className="stat-label">PROJECTS</div></div>
          <div className="stat"><div className="stat-val">0</div><div className="stat-label">GAME JAMS</div></div>
          <div className="stat"><div className="stat-val">5</div><div className="stat-label">YEARS EXP</div></div>
          <div className="stat"><div className="stat-val">0</div><div className="stat-label">SHIPPED</div></div>
        </div>

        <div className="section-title">GAMES</div>

        <div className="games-grid">
          {visibleGames.map((game: Game) => (
            <GameCard
              key={game.id}
              title={game.title}
              screenshot={game.screenshot}
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
