import type { ProjectPageConfig } from '../../types';
import { gamePageSections as pilgrimsJourneySections } from './pilgrimsJourneyNavigation';

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
    title: "The Blind Mans Requisite",
    logo: "◆ Guqqy.dev      The Blind Mans Requisite",
    viewId: 'view-blind-man',
    sections: pilgrimsJourneySections,
  },
};

export const getProjectPageConfig = (gameId?: string) =>
  gameId ? projectPageConfigs[gameId] : undefined;
