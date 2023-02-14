import { Component, Input, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss']
})
export class PatientInformationComponent implements OnInit {
  @Input() patient$: Observable<Patient | null> = new Observable<Patient | null>();
  @Input() properties: string[] = [];

  label: Map<string, string> = new Map<string, string>([
    ['primaryNephrologist', 'Primary Nephrologist'],
    ['allergies', 'Allergies / Adverse Reactions'],
    ['homeClinic', 'Home Clinic'],
    ['sex', 'Sex'],
    ['dateOfBirth', 'Date of Birth'],
    ['address', 'Address'],
    ['phoneNumber', 'Phone Number'],
    ['socialSecurityNumber', 'Social Security Number'],
    ['dialysisStartDate', 'Dialysis Start Date'],
    ['esrdCause', 'ESRD Cause'],
    ['primaryCarePhysician', 'Primary Care Physician'],
    ['insurance', 'Insurance'],
    ['certificationNumber', 'Certification Number'],
    ['payer', 'Payer'],
    ['religion', 'Religion'],
    ['ethnicity', 'Ethnicity'],
    ['race', 'Race'],
  ]);

  icon: Map<string, string> = new Map<string, string>([
    ['primaryNephrologist', 'person'],
    ['allergies', 'vaccines'],
    ['homeClinic', 'place'],
    ['Male', 'male'],
    ['Female', 'female'],
    ['Other', 'question_mark'],
    ['dateOfBirth', 'cake'],
    ['address', 'home'],
    ['phoneNumber', 'phone'],
    ['socialSecurityNumber', 'badge'],
    ['dialysisStartDate', 'start'],
    ['esrdCause', 'assignment'],
    ['primaryCarePhysician', 'person'],
    ['insurance', 'request_quote'],
    ['certificationNumber', 'numbers'],
    ['payer', 'attach_money'],
    ['religion', 'church'],
    ['ethnicity', 'accessibility_new'],
    ['race', 'accessibility_new'],
  ]);

  constructor() { }
  ngOnInit(): void { }

  get patientItems$(): Observable<any[] | null> { return this.patient$.pipe(map(patient => Object.entries(patient ?? {})), map(properties => properties.filter(property => this.properties.includes(property[0])))) }
}
