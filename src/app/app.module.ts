import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './core/header/header.component';
import { LeftComponent } from './core/left/left.component';
import { SharedModule } from './shared/shared.module';
import { PatientModule } from './patient/patient.module';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialModule,
    SharedModule,
    PatientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
