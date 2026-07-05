import type { GamePageSidebarSection } from '../../types';
import  VideoGrid  from '../../components/VideoGrid';
export const gamePageSections : GamePageSidebarSection ={
    label: 'Scene Explorer',
    sections: [
        {
            key: 'home',
            label: 'Boid Simulation',
            icon: '◉',
            header:(
                <>
                    <div className="hero-eyebrow">// Boid Simulation</div>
                    <div className="hero-name">Boid Simulation</div>
                    <div className="hero-title">Flocking Behavior</div>
                </>),
            content: (
                <>
                    <div className="hero">
                    <div className="hero-bio">
                        A simulation of Boids in 3D, using Separation, Alignment, Cohesion and Obstacle avoidance.
Coded in C# using the Unity game engine.
                    </div>
                    <VideoGrid
                        videos = {
                            [
                                {
                                    videoID: "xbbyMjsnMF4",
                                    title: "Boid Simulation - Flocking Behavior",
                                    caption: "A simulation of boid flocking behavior.",
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