import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionsModalitiesComponent } from './admissions-modalities/admissions-modalities.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { BackgroundInformationComponent } from './background-information/background-information.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AdmissionsModalitiesFormComponent } from './admissions-modalities/admissions-modalities-form/admissions-modalities-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoordinationOfBenefitsComponent } from './coordination-of-benefits/coordination-of-benefits.component';
import { WorkItemService } from './services/work-item.service';
import { AddressesFormComponent } from './addresses/addresses-form/addresses-form.component';



@NgModule({
  declarations: [
    AdmissionsModalitiesComponent,
    BackgroundInformationComponent,
    AddressesComponent,
    AdmissionsModalitiesFormComponent,
    CoordinationOfBenefitsComponent,
    AddressesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    WorkItemService
  ]
})
export class WorkItemsModule { }
