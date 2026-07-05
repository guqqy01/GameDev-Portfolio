import type { GamePageSidebarSection } from '../../types';
import  VideoGrid  from '../../components/VideoGrid';
export const gamePageSections : GamePageSidebarSection ={
    label: 'Scene Explorer',
    sections: [
        {
            key: 'home',
            label: 'THE GAME OF LIFE',
            icon: '◉',
            header:(
                <>
                    <div className="hero-eyebrow">// THE GAME OF LIFE</div>
                    <div className="hero-name">THE GAME OF LIFE</div>
                    <div className="hero-title">Conway's Cellular Automaton</div>
                </>),
            content: (
                <>
                    <div className="hero">
                    <div className="hero-bio">
                        This little project was me simulating Conway's Game of Life in Unity.
                        I wanted to see it for myself and give myself a better understanding of how it works.
                        <br/>
                        <br/>   
                        For those who don't know the game of life is a cellular automaton that follows four simple rules:
                        <br/>
                        <br/>
                        1. Any live cell with two or three live neighbors survives (survival).
                        <br/>
                        2. Any dead cell with three live neighbors becomes a live cell (reproduction).
                        <br/>
                        3. Any live cell with fewer than two live neighbors dies (underpopulation).
                        <br/>
                        4. Any live cell with more than three live neighbors dies (overpopulation).
                        <br/>
                        <br/>
                        The game of life is a zero player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.
                        I added a couple of buttons, a play and pause, a reset and a go one step forward button.
                        I also added a copy and paste system as shown in the video.
                    </div>
                    <VideoGrid
                        videos = {
                            [
                                {
                                    videoID: "-XQYGTxU0-U",
                                    title: "The Game of Life - Conway's Cellular Automaton",
                                    caption: "A simulation of conway's Game of Life.",
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