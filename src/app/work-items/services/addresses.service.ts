import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Address, AddressType, Country, State } from 'src/app/models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  constructor() { }

  getAddresses(): Observable<Address[]> {
    return of([
      {
        type: AddressType.Billing,
        streetAddressOne: '123 Nowhere Lane',
        country: Country.UnitedStates,
        city: 'Swampville',
        state: State.Florida,
        zip: '12345'
      }
    ]).pipe(delay(Math.floor(Math.random() * (5000 - 3000 + 1) + 3000)));
  }
}
