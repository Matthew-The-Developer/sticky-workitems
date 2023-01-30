export interface Menu {
  title: string;
  sections: MenuSection[];
}

export interface MenuSection {
  title: string;
  workitems: WorkItem[];
}

export interface WorkItem {
  label: string;
  component?: any;
}