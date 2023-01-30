import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionsModalitiesComponent } from './admissions-modalities/admissions-modalities.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { BackgroundInformationComponent } from './background-information/background-information.component';



@NgModule({
  declarations: [
    AdmissionsModalitiesComponent,
    BackgroundInformationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ]
})
export class WorkItemsModule { }
