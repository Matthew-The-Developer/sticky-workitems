import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SpacerDirective } from './directives/spacer.directive';
import { CompactDirective } from './directives/compact.directive';
import { WorkitemWrapperComponent } from './workitem-wrapper/workitem-wrapper.component';
import { MenuComponent } from './menu/menu.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderTemplateComponent } from './loader-template/loader-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingStateDialogComponent } from './loading-state-dialog/loading-state-dialog.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { PatientHeaderComponent } from './patient-header/patient-header.component';
import { PatientHeaderWapperComponent } from './patient-header-wapper/patient-header-wapper.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';

@NgModule({
  declarations: [
    MegaMenuComponent,
    MenuComponent,
    LoaderComponent,
    LoaderTemplateComponent,
    LoadingStateDialogComponent,
    PatientHeaderComponent,
    PatientHeaderWapperComponent,
    WorkitemWrapperComponent,
    CompactDirective,
    SpacerDirective,
    PatientInformationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    MegaMenuComponent,
    MenuComponent,
    LoaderComponent,
    LoaderTemplateComponent,
    LoadingStateDialogComponent,
    PatientHeaderComponent,
    WorkitemWrapperComponent,
    CompactDirective,
    SpacerDirective,
  ],
  providers: [
    CompactDirective,
    SpacerDirective,
  ],
})
export class SharedModule { }
