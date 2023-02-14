import { Injectable } from '@angular/core';
import { ESRDCause, Patient, Sex } from '../models/patient.model';
import { Observable, of } from 'rxjs';
import { LocationType } from '../models/location.model';
import { AddressType, Country, State } from '../models/address.model';
import { Ethnicity, Race, Religion } from '../models/background-information.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  getPatient(): Observable<Patient> {
    return of({
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
      dateOfBirth: new Date('05/11/1987'),
      address: {
        type: AddressType.Billing,
        streetAddressOne: '123 Nowhere Lane',
        country: Country.UnitedStates,
        city: 'Swampville',
        state: State.Florida,
        zip: '12345'
      },
      phoneNumber: '1231231234',
      socialSecurityNumber: '1234121234',
      dialysisStartDate: new Date('02/12/2003'),
      esrdCause: ESRDCause.hypertensionUnspecifiedRenalFailure,
      primaryCarePhysician: {
        name: 'Dr. Indiana Jones'
      },
      insurance: 'Primium PPO',
      certificationNumber: '1231231234',
      payer: 'American Insurance',
      religion: Religion.NotSpecified,
      ethnicity: Ethnicity.NotHispanicOrLatino,
      race: Race.White,
    });
  }
}
