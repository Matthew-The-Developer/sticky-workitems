import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';
import { PatientHeaderComponent } from '../shared/patient-header/patient-header.component';
import { WorkItemService } from '../work-items/services/work-item.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit, AfterViewInit {
  @ViewChild(PatientHeaderComponent, { read: ElementRef, static: true }) patientHeader!: ElementRef;
  @ViewChild('patientHeaderBorder') patientHeaderBorder!: ElementRef;
  @ViewChild('workItems', {read: ViewContainerRef}) container!: ViewContainerRef;
  
  patient$: Observable<Patient> = this.patientService.getPatient();

  constructor(
    private patientService: PatientService,
    private workItemService: WorkItemService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.headerHeight$.subscribe(() => this.changeDetectorRef.detectChanges());
  }

  ngAfterViewInit(): void {
    this.workItemService.setContainer(this.container);
  }

  get headerHeight$(): Observable<number> { return this.workItemService.headerheight$ }
}
