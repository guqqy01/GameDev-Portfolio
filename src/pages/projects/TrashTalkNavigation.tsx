import type { GamePageSidebarSection } from '../../types';
import { ItchEmbed, ResponsiveItchEmbed } from '../../components/ItchEmbed';
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
                    <p>
                        Trash talk was created for the Mini Jame Gam #60 with the theme of Trash and a special object of a Rocket.
                        The Game Jam lasted 2 and a half days, I worked on the project with my partner where she helped me with some of the ideas and some of the art.
                        This was heaps of fun to create, especially in such a short amount of time. Unfortunately I ran out of time to add sounds.
                        <br/>
                        <br/>  
                        My main takeaway from this game jam that players enjoy control and difficulty should be crafted in a different way than lack of control. 
                        Either way, I'm happy with how the game turned out and I learned a bunch.
                    </p>    
                    </div>
                        <ResponsiveItchEmbed
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