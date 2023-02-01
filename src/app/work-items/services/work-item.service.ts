import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { MenuSection, WorkItem } from 'src/app/models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class WorkItemService {
  _workitems: BehaviorSubject<Map<string, ComponentRef<unknown>>> = new BehaviorSubject<Map<string, ComponentRef<unknown>>>(new Map<string, ComponentRef<unknown>>());
  
  constructor() { }

  get hasWorkItems$(): Observable<boolean> { return this._workitems.asObservable().pipe(map(workitems => workitems.size > 0)) }

  createWorkItems(section: MenuSection, container: ViewContainerRef): void {
    section.workitems.forEach(workitem => this.createWorkItem(workitem, container));
  }

  createWorkItem(workItem: WorkItem, container: ViewContainerRef): void {
    if (workItem.component) {
      this._workitems.next(this._workitems.value.set(workItem.label, container.createComponent(workItem.component)));
    }
  }

  deleteWorkItems(): void {
    this._workitems.value.forEach((value: ComponentRef<unknown>, label: string) => this.deleteWorkItem({ label }));
  }

  deleteWorkItem({ label }: WorkItem): void {
    if (this._workitems.value.has(label)) {
      this._workitems.value.get(label)?.destroy();
      this._workitems.value.delete(label);
      this._workitems.next(this._workitems.value);
    }
  }
}
