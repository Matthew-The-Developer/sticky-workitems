import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionsModalitiesComponent } from './admissions-modalities/admissions-modalities.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    AdmissionsModalitiesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ]
})
export class WorkItemsModule { }
