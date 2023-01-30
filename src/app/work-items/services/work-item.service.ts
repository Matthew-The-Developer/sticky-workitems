import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { WorkItem } from 'src/app/models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class WorkItemService {
  workitems: Map<string, ComponentRef<unknown>> = new Map<string, ComponentRef<unknown>>();
  
  constructor() { }

  createWorkItem(workItem: WorkItem, container: ViewContainerRef): void {
    if (workItem.component) {
      this.workitems.set(workItem.label, container.createComponent(workItem.component));
    }
  }

  deleteWorkItem({ label }: WorkItem): void {
    if (this.workitems.has(label)) {
      this.workitems.get(label)?.destroy();
      console.log(this.workitems.get(label), 'destoried');
      this.workitems.delete(label);
    }
  }
}
