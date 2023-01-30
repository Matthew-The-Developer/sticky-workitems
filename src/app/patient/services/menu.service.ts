import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from 'src/app/models/menu.model';
import { AdmissionsModalitiesComponent } from 'src/app/work-items/admissions-modalities/admissions-modalities.component';
import { BackgroundInformationComponent } from 'src/app/work-items/background-information/background-information.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }

  getMenus(): Observable<Menu[]> {
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
              { label: 'Addresses' },
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
        title: 'resources',
        sections: [
          {
            title: 'Coordination of Benefits',
            workitems: [
              { label: 'Coordination of Benefits' },
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
    ]);
  }
}
