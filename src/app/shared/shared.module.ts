import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SpacerDirective } from './directives/spacer.directive';
import { CompactDirective } from './directives/compact.directive';

@NgModule({
  declarations: [
    SpacerDirective,
    CompactDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    SpacerDirective,
    CompactDirective,
  ],
  providers: [
    SpacerDirective,
    CompactDirective,
  ],
})
export class SharedModule { }
