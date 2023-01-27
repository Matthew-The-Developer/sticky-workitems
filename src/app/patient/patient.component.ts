import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuSection } from '../models/menu-section.model';
import { WorkItem } from '../models/work-item.model';
import { AdmissionsModalitiesComponent } from '../work-items/admissions-modalities/admissions-modalities.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  @ViewChild('workItems', {read: ViewContainerRef}) container!: ViewContainerRef;

  demographics: MenuSection[] = [
    {
      title: 'Workflows',
      workitems: [
        { label: 'Admissions/Modalities', component: AdmissionsModalitiesComponent },
        { label: 'Background Information' },
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
  ];

  clinicalInformation: MenuSection[] = [
    {
      title: 'CMS Forms',
      workitems: [
        { label: '2728 Form (Medical Evidence)' }
      ]
    }
  ];

  orders: MenuSection[] = [
    {
      title: 'Orders',
      workitems: [
        { label: 'Diet Orders' },
        { label: 'Procedure Orders' }
      ]
    }
  ];

  documents: MenuSection[] = [
    {
      title: 'All',
      workitems: [
        { label: 'Patient Documents' }
      ]
    }
  ];

  workflows: MenuSection[] = [
    {
      title: 'New Patient',
      workitems: [
        { label: 'Names' },
        { label: 'Primary Characteristics' },
      ]
    }
  ];

  resources: MenuSection[] = [
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
  ];

  workitems: Map<string, ComponentRef<unknown>> = new Map<string, ComponentRef<unknown>>();

  constructor() { }

  ngOnInit(): void {
  }

  createWorkItem(workItem: WorkItem): void {
    if (workItem.component) {
      this.workitems.set(workItem.label, this.container.createComponent(workItem.component));
    }
  }

  destoryWorkItem(title: string): void {
  }
}
