import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuSection, WorkItem } from 'src/app/models/menu.model';
import { Patient } from 'src/app/models/patient.model';
import { WorkItemService } from 'src/app/work-items/services/work-item.service';

@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.scss']
})
export class PatientHeaderComponent implements OnInit {
  @Input() patient$: Observable<Patient | null> = new Observable<Patient | null>();
  @Input() container: ViewContainerRef | null = null;

  constructor(
    private workItemService: WorkItemService
  ) { }

  ngOnInit(): void {
  }

  createWorkItems(section: MenuSection): void {
    if (this.container) {
      this.workItemService.createWorkItems(section, this.container);
    }
  }
  
  createWorkItem(workItem: WorkItem): void {
    if (this.container) {
      this.workItemService.createWorkItem(workItem, this.container);
    }
  }
  
  deleteWorkItems(): void {
    if (this.container) {
      this.workItemService.deleteWorkItems(this.container);
    }
  }
}
