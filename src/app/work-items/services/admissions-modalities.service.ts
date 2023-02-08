import { Injectable } from '@angular/core';
import { Observable, of, delay, mergeMap, throwError } from 'rxjs';
import { AdmissionModality, AdmissionReason, DischargeReason, Modality, ModalityType, Nephrologist } from 'src/app/models/admission-modality.model';
import { Location, LocationType } from 'src/app/models/location.model';
import { LoadService } from 'src/app/services/load.service';

@Injectable({
  providedIn: 'root'
})
export class AdmissionsModalitiesService {
  constructor(private loadService: LoadService) { }

  getAdmissionsModalities(): Observable<AdmissionModality[]> {
    const state = this.loadService.getState('admission modalities');

    if (state.successful) {
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
          isTransient: true,
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
          isTransient: false,
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
      ]).pipe(delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)));
    } else {
      return of([]).pipe(
        delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)),
        mergeMap(t => throwError(() => new Error()))
      );
    }
  }

  getLocations(): Observable<Location[]> {
    const state = this.loadService.getState('admission locations');

    if (state.successful) {
      return of([
        {
          id: '12312',
          name: 'Acme Acute (DEV)',
          type: LocationType.ACUTE,
          phone: '1231231234',
          street: '123 Seaside Ave',
          city: 'Swampville',
          state: 'FL',
          zip: '12345',
        },
        {
          id: '545323',
          name: 'Nashville (DEV)',
          type: LocationType.CLINIC,
          phone: '1231231234',
          street: '123 Whiskey Lane',
          city: 'Nashville',
          state: 'TN',
          zip: '12345',
        },
        {
          id: '232423',
          name: 'Chattanooga (DEV)',
          type: LocationType.CLINIC,
          phone: '1231231234',
          street: '123 Choo Choo Drive',
          city: 'Chattanooga',
          state: 'TN',
          zip: '12345',
        },
      ]).pipe(delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)));
    } else {
      return of([]).pipe(
        delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)),
        mergeMap(t => throwError(() => new Error()))
      );
    }
  }

  getAdmissionReasons(): Observable<string[]> {
    const state = this.loadService.getState('admission reasons');

    if (state.successful) {
      return of(Object.values(AdmissionReason)).pipe(delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)));
    } else {
      return of([]).pipe(
        delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)),
        mergeMap(t => throwError(() => new Error()))
      );
    }
  }

  getNephrologists(): Observable<Nephrologist[]> {
    const state = this.loadService.getState('admission nephrologists');

    if (state.successful) {
      return of([
        {
          name: 'Dr. Mary Smith',
          startDate: new Date('03/20/2009')
        },
        {
          name: 'Dr. Haley Nathan',
          startDate: new Date('05/14/2010')
        },
        {
          name: 'Dr. Mike Kelo',
          startDate: new Date('10/23/2015')
        },
        {
          name: 'Dr. Nick Richerson',
          startDate: new Date('06/04/2017')
        },
      ]).pipe(delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)));
    } else {
      return of([]).pipe(
        delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)),
        mergeMap(t => throwError(() => new Error()))
      );
    }
  }

  getModalities(): Observable<Modality[]> {
    const state = this.loadService.getState('admission form modalities');

    if (state.successful) {
      return of([
        {
          type: ModalityType.HemoHome,
          startDate: new Date('03/20/2009')
        },
        {
          type: ModalityType.HemoInCenter,
          startDate: new Date('03/20/2011')
        },
      ]).pipe(delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)));
    } else {
      return of([]).pipe(
        delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)),
        mergeMap(t => throwError(() => new Error()))
      );
    }
  }

  getDischargeReasons(): Observable<string[]> {
    const state = this.loadService.getState('discharge reasons');

    if (state.successful) {
      return of(Object.values(AdmissionReason)).pipe(delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)));
    } else {
      return of([]).pipe(
        delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)),
        mergeMap(t => throwError(() => new Error()))
      );
    }
  }
}
