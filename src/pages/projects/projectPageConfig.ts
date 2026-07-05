import type { ProjectPageConfig } from '../../types';
import { gamePageSections as pilgrimsJourneySections } from './pilgrimsJourneyNavigation';
import { gamePageSections as theGameOfLifeSections} from './theGameOfLifeNavigation';
import { gamePageSections as boidSimulationSections} from './BoidSimulationNavigation';
import { gamePageSections as shallowWaterSimulationSections } from './ShallowWaterSimulationNavigation';
import { gamePageSections as blindMansRequisiteSections } from './BlindMansRequisiteNavigation';
export const projectPageConfigs: Record<string, ProjectPageConfig> = {
  'the-pilgrims-journey': {
    id: 'the-pilgrims-journey',
    title: "The Pilgrim's Journey",
    logo: "◆ Guqqy.dev      The Pilgrim's Journey",
    viewId: 'view-pilgrims-journey',
    sections: pilgrimsJourneySections,
  },
  'the-blind-mans-requisite': {
    id: 'the-blind-mans-requisite',
    title: "The Blind Man's Requisite",
    logo: "◆ Guqqy.dev      The Blind Man's Requisite",
    viewId: 'view-blind-man',
    sections: blindMansRequisiteSections,
  },
  'the-game-of-life': {
    id: 'the-game-of-life',
    title: "The Game of Life",
    logo: "◆ Guqqy.dev      The Game of Life",
    viewId: 'view-game-of-life',
    sections: theGameOfLifeSections,
  },
  'boids': {
    id: 'boids',
    title: "Boid Simulation",
    logo: "◆ Guqqy.dev      Boid Simulation",
    viewId: 'view-boids',
    sections: boidSimulationSections,
  },
  'shallow-water': {
    id: 'shallow-water',
    title: "Shallow Water Simulation",
    logo: "◆ Guqqy.dev      Shallow Water Simulation",
    viewId: 'view-shallow-water',
    sections: shallowWaterSimulationSections,
  },
};

export const getProjectPageConfig = (gameId?: string) =>
  gameId ? projectPageConfigs[gameId] : undefined;
