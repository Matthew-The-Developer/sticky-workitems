export interface Location {
  id: string;
  name: string;
  type: LocationType,
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

export enum LocationType {
  CLINIC = 0,
  ACUTE = 1,
}
