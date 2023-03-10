import { Injectable } from '@angular/core';
import { delay, mergeMap, Observable, of, throwError } from 'rxjs';
import { Menu } from 'src/app/models/menu.model';
import { LoadService } from 'src/app/services/load.service';
import { AddressesComponent } from 'src/app/work-items/addresses/addresses.component';
import { AdmissionsModalitiesComponent } from 'src/app/work-items/admissions-modalities/admissions-modalities.component';
import { BackgroundInformationComponent } from 'src/app/work-items/background-information/background-information.component';
import { CoordinationOfBenefitsComponent } from '../work-items/coordination-of-benefits/coordination-of-benefits.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private loadService: LoadService) { }

  getMenus(): Observable<Menu[]> {
    const state = this.loadService.getState('menu');

    if (state.successful) {
      return of([
        {
          title: 'Demographics',
          sections: [
            {
              title: 'Workflows',
              workitems: [
                { label: 'Admissions/Modalities', component: AdmissionsModalitiesComponent },
                { label: 'Background Information', component: BackgroundInformationComponent },
                { label: 'Employment History' },
                { label: 'External Identifiers' },
                { label: 'Hospital Services Admissions' },
                { label: 'Names' },
                { label: 'Primary Characteristics' },
                { label: 'Vocational Rehab' },
              ]
            },
            {
              title: 'CMS Forms',
              workitems: [
                { label: '2728 Form (Medical Evidence)' },
              ]
            },
            {
              title: 'Contact Information',
              workitems: [
                { label: 'Additional Contacts' },
                { label: 'Addresses', component: AddressesComponent },
                { label: 'Phones' },
                { label: 'Email Addresses' },
              ]
            },
            {
              title: 'Record Keeping',
              workitems: [
                { label: 'Disclosure of Health Information' },
                { label: 'Medical Record Destruction' },
                { label: 'Medical Record Storage' },
              ]
            }
          ]
        },
        {
          title: 'Clinical Information',
          sections: [
            {
              title: 'CMS Forms',
              workitems: [
                { label: '2728 Form (Medical Evidence)' }
              ]
            }
          ]
        },
        {
          title: 'Orders',
          sections: [
            {
              title: 'Orders',
              workitems: [
                { label: 'Diet Orders' },
                { label: 'Procedure Orders' }
              ]
            }
          ]
        },
        {
          title: 'Documents',
          sections: [
            {
              title: 'All',
              workitems: [
                { label: 'Patient Documents' }
              ]
            }
          ]
        },
        {
          title: 'Workflows',
          sections: [
            {
              title: 'New Patient',
              workitems: [
                { label: 'Names' },
                { label: 'Primary Characteristics' },
              ]
            }
          ]
        },
        {
          title: 'Resources',
          sections: [
            {
              title: 'Coordination of Benefits',
              workitems: [
                { label: 'Coordination of Benefits', component: CoordinationOfBenefitsComponent },
              ]
            },
            {
              title: 'American Kidney Fund',
              workitems: [
                { label: 'Patient Profile Worksheet' },
                { label: 'Poverty Guidelines' },
              ]
            },
            {
              title: 'Financial Assistance Form',
              workitems: [
                { label: 'Financial Assistance Form' },
              ]
            }
          ]
        }
      ]).pipe(delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)));
    } else {
      return of([]).pipe(
        delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)),
        mergeMap(t => throwError(() => new Error()))
      );
    }
  }
}
