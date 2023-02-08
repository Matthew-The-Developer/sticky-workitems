import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdmissionModality, Modality, Nephrologist } from 'src/app/models/admission-modality.model';
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
  _dischargeReasons: BehaviorSubject<string[] | null> = new BehaviorSubject<string[] | null>(null);
  _nephrologists: BehaviorSubject<Nephrologist[] | null> = new BehaviorSubject<Nephrologist[] | null>(null);
  _modalities: BehaviorSubject<Modality[] | null> = new BehaviorSubject<Modality[] | null>(null);

  group: FormGroup = new FormGroup({});
  failed: Map<string, string> = new Map<string, string>();
  error: string | null = null;

  LoaderTemplate = LoaderTemplate;

  constructor(
    private fb: FormBuilder,
    private admissionsModalitiesService: AdmissionsModalitiesService
  ) { }

  ngOnInit(): void {
    this.load(); 
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.group = this.admissionModality ? this.editForm(this.admissionModality) : this.createForm();
  }

  get locations$(): Observable<Location[] | null> { return this._locations.asObservable() }
  get admissionReasons$(): Observable<string[] | null> { return this._admissionReasons.asObservable() }
  get dischargeReasons$(): Observable<string[] | null> { return this._dischargeReasons.asObservable() }
  get nephrologists$(): Observable<Nephrologist[] | null> { return this._nephrologists.asObservable() }
  get modalities$(): Observable<Modality[] | null> { return this._modalities.asObservable() }
  get location(): AbstractControl | null { return this.group.get('location') }
  get admissionReason(): AbstractControl | null { return this.group.get('admissionReason') }
  get dischargeReason(): AbstractControl | null { return this.group.get('dischargeReason') }
  get primaryNephrologist(): AbstractControl | null { return this.group.get('primaryNephrologist') } 
  get modality(): AbstractControl | null { return this.group.get('modality') }
  get hasFailed(): string | null { return this.failed.size < 2 ? this.failed.values().next().value : 'Multiple Fields could not be retrieved' }
  
  cancel(): void { 
    this.group.reset();
    this.onCancel.emit();
  }

  retry(): void {
    this.error = null;

    this.location?.disable();
    this.admissionReason?.disable();
    this.dischargeReason?.disable();
    this.primaryNephrologist?.disable();
    this.modality?.disable();

    this.load();
  }

  compareLocations(location1: Location, location2: Location): boolean { return location1 && location2 && location1.id == location2.id }
  compareNephrologists(nephrologist1: Nephrologist, nephrologist2: Nephrologist): boolean { return nephrologist1 && nephrologist2 && nephrologist1.name === nephrologist2.name }
  compareModalities(modality1: Modality, modality2: Modality): boolean { return modality1 && modality2 && modality1.type === modality2.type }

  failure(key: string): string | null { return this.failed.get(key) ?? null }

  private load(): void {
    this._locations = new BehaviorSubject<Location[] | null>(null);
    this._admissionReasons = new BehaviorSubject<string[] | null>(null);
    this._dischargeReasons = new BehaviorSubject<string[] | null>(null);
    this._nephrologists = new BehaviorSubject<Nephrologist[] | null>(null);
    this._modalities = new BehaviorSubject<Modality[] | null>(null);

    this.admissionsModalitiesService.getLocations().subscribe({
      next: locations => { 
        this._locations.next(locations);
        this.location?.enable();
      },
      error: () => {
        this.failed.set('location', 'Locations could not be retrieved');
      }
    });
    this.admissionsModalitiesService.getAdmissionReasons().subscribe({
      next: reasons => {
        this._admissionReasons.next(reasons);
        this.admissionReason?.enable();
      },
      error: () => {
        this.failed.set('admissionReason', 'Admission Reasons could not be retrieved');
      }
    });
    this.admissionsModalitiesService.getDischargeReasons().subscribe({
      next: reasons => {
        this._dischargeReasons.next(reasons);
        this.dischargeReason?.enable();
      },
      error: () => {
        this.failed.set('dischargeReason', 'Discharge Reason could not be retrieved');
      }
    });
    this.admissionsModalitiesService.getNephrologists().subscribe({
      next: nephrologists => {
        this._nephrologists.next(nephrologists);
        this.primaryNephrologist?.enable();
      },
      error: () => {
        this.failed.set('primaryNephrologist', 'Nephrologists could not be retrieved');
      }
    });
    this.admissionsModalitiesService.getModalities().subscribe({
      next: modalities => {
        this._modalities.next(modalities);
        this.modality?.enable();
      },
      error: () => {
        this.failed.set('modality', 'Modalities could not be retrieved');
      }
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      location: [{ value: null, disabled: !this._locations.value }, [Validators.required]],
      admissionDate: [null, [Validators.required]],
      admissionReason: [{ value: null, disabled: !this._admissionReasons.value }, [Validators.required]],
      isTransient: [false],
      primaryNephrologist: [{ value: null, disabled: !this._nephrologists.value }, [Validators.required]],
      modality: [{ value: null, disabled: !this._modalities.value }, [Validators.required]],
      dischargeDate: [null, [Validators.required]],
      dischargeReason: [{ value: null, disabled: !this._dischargeReasons.value }],
    });
  }

  private editForm(admissionModality: AdmissionModality): FormGroup {
    return this.fb.group({
      location: [{ value: { ...admissionModality.location }, disabled: !this._locations.value }, [Validators.required]],
      admissionDate: [admissionModality.admissionDate, [Validators.required]],
      admissionReason: [{ value: admissionModality.admissionReason, disabled: !this._admissionReasons.value }, [Validators.required]],
      isTransient: [admissionModality.isTransient],
      primaryNephrologist: [{ value: admissionModality.nephrologists?.length > 0 ? { ...admissionModality.nephrologists[0] } : null, disabled: !this._nephrologists.value }, [Validators.required]],
      modality: [{ value: admissionModality.modalities?.length > 0 ? { ...admissionModality.modalities[0] } : null, disabled: !this._modalities.value }, [Validators.required]],
      dischargeDate: [admissionModality.dischargeDate, [Validators.required]],
      dischargeReason: [{ value: admissionModality.dischargeReason, disabled: !this._dischargeReasons.value }],
    });
  }
}
