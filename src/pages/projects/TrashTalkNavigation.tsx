import type { GamePageSidebarSection } from '../../types';
export const gamePageSections : GamePageSidebarSection ={
    label: 'Scene Explorer',
    sections: [
        {
            key: 'home',
            label: 'Trash Talk',
            icon: '◉',
            header:(
                <>
                    <div className="hero-eyebrow">// Trash Talk</div>
                    <div className="hero-name">Trash Talk</div>
                    <div className="hero-title">Defend earth from an alien by trash talking.</div>
                </>),
            content: (
                <>
                    <div className="hero">
                    <div className="hero-bio">
                        
                    </div>
                    

                    </div>
                </>
            ),
        }
    ]
};