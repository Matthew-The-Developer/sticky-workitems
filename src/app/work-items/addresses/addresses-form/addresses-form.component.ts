import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { AddressesService } from '../../services/addresses.service';

@Component({
  selector: 'app-addresses-form',
  templateUrl: './addresses-form.component.html',
  styleUrls: ['./addresses-form.component.scss']
})
export class AddressesFormComponent implements OnInit, OnChanges {
  @Input() address: Address | null = null;
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();  

  _types: BehaviorSubject<string[] | null> = new BehaviorSubject<string[] | null>(null);
  _countries: BehaviorSubject<string[] | null> = new BehaviorSubject<string[] | null>(null);
  _states: BehaviorSubject<string[] | null> = new BehaviorSubject<string[] | null>(null);

  group: FormGroup = new FormGroup({});
  failed: Map<string, string> = new Map<string, string>();

  constructor(
    private fb: FormBuilder,
    private addressService: AddressesService,
  ) { }

  ngOnInit(): void { this.load() }
  ngOnChanges(): void { this.group = this.address ? this.editForm(this.address) : this.createForm() }

  get types$(): Observable<string[] | null> { return this._types.asObservable() }
  get countries$(): Observable<string[] | null> { return this._countries.asObservable() }
  get states$(): Observable<string[] | null> { return this._states.asObservable() }
  get type(): AbstractControl | null { return this.group.get('type') }
  get country(): AbstractControl | null { return this.group.get('country') }
  get state(): AbstractControl | null { return this.group.get('state') }
  get hasFailed(): string | null { return this.failed.size < 2 ? this.failed.values().next().value : 'Multiple Fields could not be retrieved' }

  save(): void {
    this.group.markAllAsTouched();
    this.group.updateValueAndValidity();
  }

  cancel(): void { 
    this.group.reset();
    this.onCancel.emit();
  }

  retry(): void {
    this.failed.clear();
    this.load();
  }

  failure(key: string): string | null { return this.failed.get(key) ?? null }

  private load(): void {
    this._types = new BehaviorSubject<string[] | null>(null);
    this._countries = new BehaviorSubject<string[] | null>(null);
    this._states = new BehaviorSubject<string[] | null>(null);

    this.addressService.getAddressTypes().subscribe({
      next: addressTypes => this._types.next(addressTypes),
      error: () => this.failed.set('type', 'Address Types could not be retrieved')
    });

    this.addressService.getCountries().subscribe({
      next: countries => this._countries.next(countries),
      error: () => this.failed.set('country', 'Countries could not be retrieved')
    });

    this.addressService.getStates().subscribe({
      next: states => this._states.next(states),
      error: () => this.failed.set('state', 'States could not be retrieved')
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      type: [null, [Validators.required]],
      addressOne: [null, [Validators.required]],
      addressTwo: [null],
      country: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      county: [null],
      zip: [null, [Validators.required]]
    });
  }

  private editForm(address: Address): FormGroup {
    return this.fb.group({
      type: [address.type, [Validators.required]],
      addressOne: [address.streetAddressOne, [Validators.required]],
      addressTwo: [address.streetAddressTwo],
      country: [address.country, [Validators.required]],
      city: [address.city, [Validators.required]],
      state: [address.state, [Validators.required]],
      county: [address.state],
      zip: [address.zip, [Validators.required]]
    });
  }
}
