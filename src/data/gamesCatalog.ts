import type { Game } from '../types';
import pjScreenshot from '../assets/The Pilgrims Journey Images/The Pilgrims Journey (Gameplay 2) Screenshot.png'
import GoLScreenshot from '../assets/The Game of Life/The_Game_of_Life_Screenshot.png'
import BoidScreenshot from '../assets/Boid/Boid Simulation Screenshot.png'
import shallowWaterScreenshot from '../assets/2D Shallow Water Wave/2D Shallow water wave Screenshot.png'
export const games: Game[] = [
  {
    id: 'the-pilgrims-journey',
    title: "The Pilgrim's Journey",
    screenshot: pjScreenshot,
    description: 'An adventure game where you are the bullet hell protagonist.',
    genre: 'ADVENTURE / ROGUELIKE / 2D',
    engine: 'UNITY',
    tags: ['C#', '2D', 'PROCEDURAL', 'PIXEL ART'],
    href: '/games/the-pilgrims-journey',
  },
  {
    id: 'the-blind-mans-requisite',
    title: "The Blind Mans Requisite",
    screenshot: "",
    description: 'A Horror game where you play as a blind man with echo location',
    genre: 'HORROR / 3D',
    engine: 'UNITY',
    tags: ['C#', 'HORROR', '3D'],
    href: '/games/the-blind-mans-requisite',
  },
  {
    id: 'the-game-of-life',
    title: "The Game Of Life",
    screenshot: GoLScreenshot,
    description: 'A small project where I simulate "the game of life"',
    genre: '2D',
    engine: 'UNITY',
    tags: ['C#', '2D'],
    href: '/games/the-game-of-life',
  },
  {
    id: 'boids',
    title: "Boid Simulation",
    screenshot: BoidScreenshot,
    description: 'A small project where I simulate boids',
    genre: '3D',
    engine: 'UNITY',
    tags: ['C#', '3D'],
    href: '/games/boids',
  },
  {
    id: 'shallow-water',
    title: "Shallow Water Simulation",
    screenshot: shallowWaterScreenshot,
    description: 'A shallow water simulation',
    genre: '3D',
    engine: 'UNITY',
    tags: ['C#', '3D'],
    href: '/games/shallow-water',
  },
];
