import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuSection, WorkItem } from '../models/menu.model';
import { WorkItemService } from '../work-items/services/work-item.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  @ViewChild('workItems', {read: ViewContainerRef}) container!: ViewContainerRef;

  constructor(
    private workItemService: WorkItemService
  ) { }

  ngOnInit(): void { }

  createWorkItems(section: MenuSection): void { this.workItemService.createWorkItems(section, this.container) }
  createWorkItem(workItem: WorkItem): void { this.workItemService.createWorkItem(workItem, this.container) }
  deleteWorkItems(): void { this.workItemService.deleteWorkItems(this.container) }
}
