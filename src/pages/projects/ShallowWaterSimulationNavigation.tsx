import type { GamePageSidebarSection } from '../../types';
import  VideoGrid  from '../../components/VideoGrid';
export const gamePageSections : GamePageSidebarSection ={
    label: 'Scene Explorer',
    sections: [
        {
            key: 'home',
            label: 'Shallow Water Simulation',
            icon: '◉',
            header:(
                <>
                    <div className="hero-eyebrow">// Shallow Water Simulation</div>
                    <div className="hero-name">Shallow Water Simulation</div>
                    <div className="hero-title">2D Shallow Water Dynamics</div>
                </>),
            content: (
                <>
                    <div className="hero">
                    <div className="hero-bio">
                        
                    </div>
                    <VideoGrid
                        videos = {
                            [
                                {
                                    videoID: "SD6GxKMAzms",
                                    title: "Shallow Water Simulation - 2D Shallow Water Dynamics",
                                    caption: "A simulation of 2D shallow water dynamics.",
                                },
                            ]
                        }
                    />

                    </div>
                </>
            ),
        }
    ]
};