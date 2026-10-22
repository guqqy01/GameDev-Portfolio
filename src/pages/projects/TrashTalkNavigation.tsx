import type { GamePageSidebarSection } from '../../types';
import { ItchEmbed } from '../../components/ItchEmbed';
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
                        <ItchEmbed
                            uploadId={19861871}
                            title="Play Trash Talk on itch.io"
                            href="https://guqqy01.itch.io/trash-talk"
                        />
                    </div>
                </>
            ),
        }
    ]
};