import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admissions-modalities',
  templateUrl: './admissions-modalities.component.html',
  styleUrls: ['./admissions-modalities.component.scss']
})
export class AdmissionsModalitiesComponent implements OnInit {
  @Output() onClose: EventEmitter<AdmissionsModalitiesComponent> = new EventEmitter<AdmissionsModalitiesComponent>();

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
}
