import { Component, EventEmitter, OnInit, Output, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoaderTemplate } from 'src/app/models/loader-template.enum';
import { Menu, MenuSection, WorkItem } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu.service';
import { WorkItemService } from 'src/app/work-items/services/work-item.service';



@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent implements OnInit {
  @Output() onCreateWorkItems: EventEmitter<MenuSection> = new EventEmitter<MenuSection>();
  @Output() onCreateWorkItem: EventEmitter<WorkItem> = new EventEmitter<WorkItem>();
  @Output() onDeleteWorkItems: EventEmitter<void> = new EventEmitter<void>();
  
  _menus: BehaviorSubject<Menu[] | null> = new BehaviorSubject<Menu[] | null>(null);

  LoaderTemplate = LoaderTemplate;

  constructor(
    private menuService: MenuService,
    private workItemService: WorkItemService
  ) { }

  ngOnInit(): void {
    this.menuService.getMenus().subscribe({
      next: (menus: Menu[]) => this._menus.next(menus) 
    });
  }

  get menus$(): Observable<Menu[] | null> { return this._menus.asObservable() }
  get hasWorkItems$(): Observable<boolean> { return this.workItemService.hasWorkItems$ }

  createWorkItems(section: MenuSection): void { this.onCreateWorkItems.emit(section) }
  createWorkItem(workItem: WorkItem): void { this.onCreateWorkItem.emit(workItem) }
  deleteWorkItems(): void { this.onDeleteWorkItems.emit(); }
}
