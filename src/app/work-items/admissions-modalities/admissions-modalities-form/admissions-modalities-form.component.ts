import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdmissionModality } from 'src/app/models/admission-modality.model';
import { LoaderTemplate } from 'src/app/models/loader-template.enum';
import { Location } from 'src/app/models/location.model';
import { AdmissionsModalitiesService } from '../../services/admissions-modalities.service';

@Component({
  selector: 'app-admissions-modalities-form',
  templateUrl: './admissions-modalities-form.component.html',
  styleUrls: ['./admissions-modalities-form.component.scss']
})
export class AdmissionsModalitiesFormComponent implements OnInit, OnChanges {
  @Input() admissionModality: AdmissionModality | null = null;
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  _locations: BehaviorSubject<Location[] | null> = new BehaviorSubject<Location[] | null>(null);
  _admissionReasons: BehaviorSubject<string[] | null> = new BehaviorSubject<string[] | null>(null);

  group: FormGroup = new FormGroup({});
  error: string | null = null;

  LoaderTemplate = LoaderTemplate;

  constructor(
    private fb: FormBuilder,
    private admissionsModalitiesService: AdmissionsModalitiesService
  ) { }

  ngOnInit(): void {
    this._locations = new BehaviorSubject<Location[] | null>(null);
    this._admissionReasons = new BehaviorSubject<string[] | null>(null);

    this.admissionsModalitiesService.getLocations().subscribe(
      locations => this._locations.next(locations),
      () => this.error = 'Locations could not be retrieved'
    );
    this.admissionsModalitiesService.getAdmissionReasons().subscribe(
      reasons => this._admissionReasons.next(reasons),
      () => this.error = 'Admission Reasons could not be retrieved'
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.admissionModality, this._locations.value);
    this.group = this.admissionModality ? this.editForm(this.admissionModality) : this.createForm();
  }

  get locations$(): Observable<Location[] | null> { return this._locations.asObservable() }
  get admissionReasons$(): Observable<string [] | null> { return this._admissionReasons.asObservable() }

  cancel(): void { 
    this.group.reset();
    this.onCancel.emit();
  }

  compareLocations(location1: Location, location2: Location) {
    return location1 && location2 && location1.id == location2.id;
  }

  private createForm(): FormGroup {
    return this.fb.group({
      location: [null, [Validators.required]],
      admissionDate: [null, [Validators.required]],
      admissionReason: [null, [Validators.required]],
    });
  }

  private editForm(admissionModality: AdmissionModality): FormGroup {
    return this.fb.group({
      location: [{ ...admissionModality.location }, [Validators.required]],
      admissionDate: [admissionModality.admissionDate, [Validators.required]],
      admissionReason: [admissionModality.admissionReason, [Validators.required]],
    });
  }
}
