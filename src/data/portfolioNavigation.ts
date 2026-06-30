import type { SidebarSection, SidebarTab } from '../types';
import { games } from './gamesCatalog';

const allTags = Array.from(
  new Set(
    games.flatMap((game) => [...game.tags, game.engine])
  )
);

const tagTabs: SidebarTab[] = allTags.map((tag) => ({
  key: tag,
  label: tag,
  icon: '◉',
}));

export const portfolioSidebarSections: SidebarSection[] = [
  {
    label: 'Scene Explorer',
    sidebarTabs: [
      {
        key: 'all',
        label: 'All Projects',
        icon: '◉',
      },
    ],
  },
  {
    label: 'Filter By Tag',
    sidebarTabs: tagTabs,
  },
];