import { Injectable } from '@angular/core';
import { delay, mergeMap, Observable, of, throwError } from 'rxjs';
import { Address, AddressType, Country, State } from 'src/app/models/address.model';
import { LoadService } from 'src/app/services/load.service';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  constructor(private loadService: LoadService) { }

  getAddresses(): Observable<Address[]> {
    const state = this.loadService.getState('addresses');

    if (state.successful) {
      return of([
        {
          type: AddressType.Billing,
          streetAddressOne: '123 Nowhere Lane',
          country: Country.UnitedStates,
          city: 'Swampville',
          state: State.Florida,
          zip: '12345'
        }
      ]).pipe(delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)));
    } else {
      return of([]).pipe(
        delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)),
        mergeMap(t => throwError(() => new Error()))
      );
    }
  }

  getAddressTypes(): Observable<string[]> {
    const state = this.loadService.getState('addresses/types');

    if (state.successful) {
      return of(Object.values(AddressType)).pipe(delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)));
    } else {
      return of([]).pipe(
        delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)),
        mergeMap(t => throwError(() => new Error()))
      );
    }
  }

  getCountries(): Observable<string[]> {
    const state = this.loadService.getState('addresses/countries');

    if (state.successful) {
      return of(Object.values(Country)).pipe(delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)));
    } else {
      return of([]).pipe(
        delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)),
        mergeMap(t => throwError(() => new Error()))
      );
    }
  }

  getStates(): Observable<string[]> {
    const state = this.loadService.getState('addresses/states');

    if (state.successful) {
      return of(Object.values(State)).pipe(delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)));
    } else {
      return of([]).pipe(
        delay(Math.floor(Math.random() * (state.max - state.min + 1) + state.min)),
        mergeMap(t => throwError(() => new Error()))
      );
    }
  }
}
