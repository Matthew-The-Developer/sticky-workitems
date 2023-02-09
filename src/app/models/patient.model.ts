import { Nephrologist } from "./admission-modality.model";
import { Allergy } from "./allergy.model";
import { Location } from "./location.model";

export interface Patient {
  name: string;
  id: string;
  schedule: Day[];
  primaryNephrologist: Nephrologist;
  allergies: Allergy[] | null;
  homeClinic: Location;
  sex: Sex;
  dateOfBirth: Date;
}

export enum Sex {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export interface Day {
  label: string;
  active: boolean;
}
