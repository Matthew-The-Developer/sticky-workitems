import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdmissionModality } from 'src/app/models/admission-modality.model';
import { LoaderTemplate } from 'src/app/models/loader-template.enum';
import { WorkItem } from 'src/app/models/menu.model';
import { WorkitemWrapperComponent } from 'src/app/shared/workitem-wrapper/workitem-wrapper.component';
import { AdmissionsModalitiesService } from '../services/admissions-modalities.service';
import { WorkItemService } from '../services/work-item.service';

@Component({
  selector: 'app-admissions-modalities',
  templateUrl: './admissions-modalities.component.html',
  styleUrls: ['./admissions-modalities.component.scss']
})
export class AdmissionsModalitiesComponent implements OnInit {
  @ViewChild(WorkitemWrapperComponent, {read: ElementRef}) wrapper!: ElementRef<HTMLElement>;

  _admissionsModalities: BehaviorSubject<AdmissionModality[] | null> = new BehaviorSubject<AdmissionModality[] | null>(null);

  opened: boolean = false;
  workItem: WorkItem = {
    label: 'Admissions/Modalities'
  };

  LoaderTemplate = LoaderTemplate;

  constructor(
    private admissionsModalitiesService: AdmissionsModalitiesService,
    private workItemService: WorkItemService
  ) { }

  ngOnInit(): void {
    this._admissionsModalities = new BehaviorSubject<AdmissionModality[] | null>(null);

    this.admissionsModalitiesService.getAdmissionsModalities().subscribe((admissionsModalities: AdmissionModality[]) => this._admissionsModalities.next(admissionsModalities));
  }

  get admissionsModalities$(): Observable<AdmissionModality[] | null> { return this._admissionsModalities.asObservable() }
  get title(): string { return this.workItem.label }

  toggle(): void {
    this.wrapper.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.opened = !this.opened;
  }

  close(): void {
    this.workItemService.deleteWorkItem(this.workItem);
  }

  hasModalitiesOrNephrologists(admissionModality: AdmissionModality): boolean { return this.hasModalities(admissionModality) || this.hasNephrologists(admissionModality) }
  hasModalities(admissionModality: AdmissionModality): boolean { return admissionModality.modalities.length > 0 }
  hasNephrologists(admissionModality: AdmissionModality): boolean { return admissionModality.nephrologists.length > 0 }
}
