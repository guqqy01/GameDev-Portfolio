import type { ReactNode } from 'react';

export type TopbarTab = {
  key: string;
  label: string;
};

export type GamePageSection = {
  key: string;
  label: string;
  icon?: string;
  children?: GamePageSection[];
  header?: ReactNode;
  content?: ReactNode;
};

export type GamePageSidebarSection = {
  label: string;
  sections: GamePageSection[];
};

export type ProjectPageConfig = {
  id: string;
  title: string;
  logo: string;
  viewId: string;
  sections: GamePageSidebarSection;
};

export type SidebarTab = {
  key: string;
  label: string;
  icon?: string;
  children?: SidebarTab[];
};

export type SidebarSection = {
  label: string;
  sidebarTabs: SidebarTab[];
};

export type Game = {
  id: string;
  title: string;
  screenshot: string;
  description: string;
  genre: string;
  engine: string;
  tags: string[];
  href: string;
};
