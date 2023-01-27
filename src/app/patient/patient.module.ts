import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { WorkItemsModule } from '../work-items/work-items.module';



@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    WorkItemsModule,
  ],
  exports: [
    PatientComponent
  ]
})
export class PatientModule { }
