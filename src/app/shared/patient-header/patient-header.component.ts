import { Component, Input, OnInit } from '@angular/core';
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
  @Input() modeDefault: 0 | 1 | 2 = 1;

  standardProperties: string[] = ['schedule', 'primaryNephrologist', 'allergies', 'homeClinic', 'sex', 'dateOfBirth'];
  expandedProperties: string[] = ['address', 'phoneNumber', 'socialSecurityNumber', 'dialysisStartDate', 'esrdCause', 'primaryCarePhysician', 'insurance', 'certificationNumber', 'payer', 'religion', 'ethnicity', 'race'];

  constructor(private workItemService: WorkItemService) { }
  ngOnInit(): void { }

  createWorkItems(section: MenuSection): void { this.workItemService.createWorkItems(section) }
  createWorkItem(workItem: WorkItem): void { this.workItemService.createWorkItem(workItem) }
  deleteWorkItems(): void { this.workItemService.deleteWorkItems() }
}
