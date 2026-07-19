import type { GamePageSidebarSection } from '../../types';

export const gamePageSections : GamePageSidebarSection ={
    label: 'Scene Explorer',
    sections: [
        {
            key: 'home',
            label: "The Blind Man's Requisite",
            icon: '◉',
            header:(
                <>
                    <div className="hero-eyebrow">// The Blind Man's Requisite</div>
                    <div className="hero-name">The Blind Man's Requisite</div>
                    <div className="hero-title">A Horror Game</div>
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