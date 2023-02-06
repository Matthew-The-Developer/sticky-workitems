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

@NgModule({
  declarations: [
    MenuComponent,
    LoaderComponent,
    LoaderTemplateComponent,
    LoadingStateDialogComponent,
    WorkitemWrapperComponent,
    CompactDirective,
    SpacerDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    MenuComponent,
    LoaderComponent,
    LoaderTemplateComponent,
    LoadingStateDialogComponent,
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
