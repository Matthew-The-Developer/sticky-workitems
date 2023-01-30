import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SpacerDirective } from './directives/spacer.directive';
import { CompactDirective } from './directives/compact.directive';
import { WorkitemWrapperComponent } from './workitem-wrapper/workitem-wrapper.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    SpacerDirective,
    CompactDirective,
    WorkitemWrapperComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    SpacerDirective,
    CompactDirective,
    MenuComponent,
    WorkitemWrapperComponent,
  ],
  providers: [
    SpacerDirective,
    CompactDirective,
  ],
})
export class SharedModule { }
