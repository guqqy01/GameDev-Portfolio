import ImageGrid from '../../components/ImageGrid';
import type { GamePageSidebarSection } from '../../types';

import BMRScreenshot from '../../assets/The Blind Mans Requisite/BMRScreenshot3.png'
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
                            The Blind Man's Requisite is a horror game where you play as a blind man with echo location. The game is built in Unity and uses C# for scripting. 
                            <br/>
                            The player must navigate through a dark environment, using sound to locate objects and avoid enemies. The game features a unique audio-based navigation system that challenges players.
                            <br/>
                            This creates a tense and immersive experience, where players have to rely on creating sound to understand their surroundings and progress through the game, however when creating sound enemies can hear you and will come after you, so you must be careful when navigating the environment.
                        </div>
                    </div>

                    <ImageGrid
                        images={
                            [
                            {
                                src: BMRScreenshot,
                                alt: "Gameplay screenshot from The Blind Man's Requisite",
                                caption: "A gameplay snapshot from The Blind Man's Requisite."
                            },
                            ]
                        }
                    />
                </>
            ),
        },
        {
            key: 'overview',
            label: 'Overview',
            icon: '◉',
            content: (
            <>
                <p>
                
                </p>
            </>
            ),
        },
    ]
};