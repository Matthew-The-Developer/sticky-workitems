import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [
    PatientComponent
  ]
})
export class PatientModule { }
