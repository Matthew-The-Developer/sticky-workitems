import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocationType } from '../models/location.model';
import { Patient, Sex } from '../models/patient.model';
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
  
  patient$: Observable<Patient> = of({
    name: 'John Doe',
    id: '12345',
    schedule: [
      { label: 'Mo', active: false },
      { label: 'Tu', active: true },
      { label: 'We', active: false },
      { label: 'Th', active: true },
      { label: 'Fr', active: false },
      { label: 'Sa', active: true },
      { label: 'Su', active: false },
    ],
    primaryNephrologist: {
      name: 'Dr. Mary Smith',
      startDate: new Date('04/23/2004')
    },
    allergies: [],
    homeClinic: {
      id: '12312',
      name: 'Acme Acute (DEV)',
      type: LocationType.ACUTE,
      phone: '1231231234',
      street: '123 Seaside Ave',
      city: 'Swampville',
      state: 'FL',
      zip: '12345',
    },
    sex: Sex.Male,
    dateOfBirth: new Date('05/11/1987')
  });

  constructor(
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
