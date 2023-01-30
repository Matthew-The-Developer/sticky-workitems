import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdmissionModality, AdmissionReason, DischargeReason, LocationType, ModalityType } from 'src/app/models/admission-modality.model';

@Injectable({
  providedIn: 'root'
})
export class AdmissionsModalitiesService {

  constructor() { }

  getAdmissionsModalities(): Observable<AdmissionModality[]> {
    return of([
      {
        location: {
          id: '12312',
          name: 'Acme Acute (DEV)',
          type: LocationType.ACUTE,
          phone: '1231231234',
          street: '123 Seaside Ave',
          city: 'Swampville',
          state: 'FL',
          zip: '12345',
        },
        hospitalServices: true,
        admissionDate: new Date('01/03/2011'),
        admissionReason: AdmissionReason.PreDialysisSupport,
        modalities: [],
        nephrologists: [],
      },
      {
        location: {
          id: '12312',
          name: 'Nashville (DEV)',
          type: LocationType.CLINIC,
          phone: '1231231234',
          street: '123 Whiskey Lane',
          city: 'Nashville',
          state: 'TN',
          zip: '12345',
        },
        hospitalServices: false,
        admissionDate: new Date('06/15/2008'),
        admissionReason: AdmissionReason.TransferInAsKidney,
        dischargeDate: new Date('11/23/2019'),
        dischargeReason: DischargeReason.Death,
        modalities: [
          {
            type: ModalityType.HemoHome,
            startDate: new Date('03/20/2009')
          }
        ],
        nephrologists: [
          {
            name: 'Dr. Mary Smith',
            startDate: new Date('03/20/2009')
          }
        ],
      }
    ]);
  }
}
