export enum ItemCategory {
  UI = 'UI',
  UX = 'UX',
  ENHANCEMENT = 'Enhancement',
  BUG = 'Bug',
  FEATURE = 'Feature',
}

export enum AllCategory {
  ALL = 'All',
}

export type SidebarCategories = AllCategory | ItemCategory;
