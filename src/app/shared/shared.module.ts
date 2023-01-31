import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SpacerDirective } from './directives/spacer.directive';
import { CompactDirective } from './directives/compact.directive';
import { WorkitemWrapperComponent } from './workitem-wrapper/workitem-wrapper.component';
import { MenuComponent } from './menu/menu.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderTemplateComponent } from './loader-template/loader-template.component';

@NgModule({
  declarations: [
    MenuComponent,
    LoaderComponent,
    LoaderTemplateComponent,
    WorkitemWrapperComponent,
    CompactDirective,
    SpacerDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MenuComponent,
    LoaderComponent,
    LoaderTemplateComponent,
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
