import { WorkItem } from "./work-item.model";

export interface MenuSection {
  title: string;
  workitems: WorkItem[];
}