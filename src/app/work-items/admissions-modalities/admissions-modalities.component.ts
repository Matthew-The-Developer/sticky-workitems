import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { WorkitemWrapperComponent } from 'src/app/shared/workitem-wrapper/workitem-wrapper.component';

@Component({
  selector: 'app-admissions-modalities',
  templateUrl: './admissions-modalities.component.html',
  styleUrls: ['./admissions-modalities.component.scss']
})
export class AdmissionsModalitiesComponent implements OnInit {
  @Output() onClose: EventEmitter<AdmissionsModalitiesComponent> = new EventEmitter<AdmissionsModalitiesComponent>();
  @ViewChild(WorkitemWrapperComponent, {read: ElementRef}) wrapper!: ElementRef<HTMLElement>;

  title = "Admissions";
  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.opened = !this.opened;
  }

  close(): void {

  }

  scrollTo(): void {
    this.wrapper.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
