export interface Address {
  type: AddressType;
  streetAddressOne: string;
  streetAddressTwo?: string;
  country: Country;
  city: string;
  state: State;
  county?: string;
  zip: string;
}

export enum AddressType {
  Billing = 'Billing',
  Mailing = 'Mailing',
  Physical = 'Physical',
  Transient = 'Transient'
}

export enum Country {
  UnitedStates = 'United States',
  Other = 'Other'
}

export enum State {
  Alabama = 'Alabama',
  Florida = 'Florida',
  Wyoming = 'Wyoming',
}
