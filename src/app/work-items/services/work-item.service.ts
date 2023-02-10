import { ChangeDetectorRef, ComponentRef, Inject, Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { MenuSection, WorkItem } from 'src/app/models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class WorkItemService {
  container: ViewContainerRef | null = null;
  _headerheight: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _workitems: BehaviorSubject<Map<string, ComponentRef<unknown>>> = new BehaviorSubject<Map<string, ComponentRef<unknown>>>(new Map<string, ComponentRef<unknown>>());
  
  constructor() { }

  get headerheight$(): Observable<number> { return this._headerheight.asObservable() }
  get hasWorkItems$(): Observable<boolean> { return this._workitems.asObservable().pipe(map(workitems => workitems.size > 0)) }

  setContainer(container: ViewContainerRef): void { this.container = container }
  setHeight(height: number): void { 
    this._headerheight.next(height);
  }
  
  createWorkItems(section: MenuSection): void {
    section.workitems.forEach(workitem => this.createWorkItem(workitem));
  }

  createWorkItem(workItem: WorkItem): void {
    if (this.container && workItem.component) {
      this._workitems.next(this._workitems.value.set(workItem.label, this.container.createComponent(workItem.component)));
    }
  }

  deleteWorkItems(): void {
    if (this.container) {
      this._workitems.value.forEach((value: ComponentRef<unknown>, label: string) => this.deleteWorkItem({ label }));
      this.container.clear();
    }
  }

  deleteWorkItem({ label }: WorkItem): void {
    if (this._workitems.value.has(label)) {
      this._workitems.value.get(label)?.destroy();
      this._workitems.value.delete(label);
      this._workitems.next(this._workitems.value);
    }
  }
}
