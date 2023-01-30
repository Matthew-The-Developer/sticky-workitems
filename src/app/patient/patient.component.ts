import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Menu, MenuSection, WorkItem } from '../models/menu.model';
import { AdmissionsModalitiesComponent } from '../work-items/admissions-modalities/admissions-modalities.component';
import { WorkItemService } from '../work-items/services/work-item.service';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  @ViewChild('workItems', {read: ViewContainerRef}) container!: ViewContainerRef;

  _menus: BehaviorSubject<Menu[] | null> = new BehaviorSubject<Menu[] | null>(null);

  constructor(
    private menuService: MenuService,
    private workItemService: WorkItemService
  ) { }

  ngOnInit(): void {
    this.menuService.getMenus().subscribe((menus: Menu[]) => this._menus.next(menus));
  }

  get menus$(): Observable<Menu[] | null> { return this._menus.asObservable() }

  createWorkItem(workItem: WorkItem): void {
    this.workItemService.createWorkItem(workItem, this.container);
  }
}
