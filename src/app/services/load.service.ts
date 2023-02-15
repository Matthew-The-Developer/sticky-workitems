import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoaderState } from '../models/loader-state.model';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  _state: BehaviorSubject<Map<string, LoaderState>> = new BehaviorSubject<Map<string, LoaderState>>(new Map([
    ['menu', { successful: true, min: 0, max: 0 }],
    ['addresses', { successful: true, min: 1000, max: 3000 }],
    ['addresses/types', { successful: true, min: 1000, max: 3000 }],
    ['addresses/countries', { successful: true, min: 1000, max: 3000 }],
    ['addresses/states', { successful: true, min: 1000, max: 3000 }],
    ['admissions', { successful: true, min: 1000, max: 3000 }],
    ['admissions/admissionReasons', { successful: true, min: 1000, max: 3000 }],
    ['admissions/dischargeReasons', { successful: true, min: 1000, max: 3000 }],
    ['admissions/locations', { successful: true, min: 1000, max: 3000 }],
    ['admissions/nephrologists', { successful: true, min: 1000, max: 3000 }],
    ['admissions/modalities', { successful: true, min: 1000, max: 3000 }],
    ['coordination of benefits', { successful: true, min: 1000, max: 3000 }],
  ]));

  localStorage: Storage = window.localStorage;

  constructor() {
    if (this.localStorage.getItem('state')) {
      const cachedState = JSON.parse(this.localStorage.getItem('state')!, reviver);

      if (this._state.value.size !== cachedState.size) {
        this.localStorage.setItem('state', JSON.stringify(this._state.value, replacer));
      } else {
        this._state.next(cachedState);
      }
    } else {
      this.localStorage.setItem('state', JSON.stringify(this._state.value, replacer));
    }
  }

  get state$(): Observable<Map<string, LoaderState>> { return this._state.asObservable() }

  updateState(name: string, state: LoaderState): void {
    let current = this._state.value;
    
    if (current.has(name)) {
      current.delete(name);
    }

    current.set(name, state);

    this.localStorage.setItem('state', JSON.stringify(current, replacer));
    this._state.next(current);
  }

  getState(item: string): LoaderState {
    return this._state.value.get(item) ?? { successful: true, min: 0, max: 0 };
  }
}

function replacer(key: string, value: any) {
  if(value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()),
    };
  } else {
    return value;
  }
}

function reviver(key: string, value: any) {
  if(typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}
