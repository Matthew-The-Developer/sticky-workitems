import { Address } from "./address.model";
import { Nephrologist } from "./admission-modality.model";
import { Allergy } from "./allergy.model";
import { Ethnicity, Race, Religion } from "./background-information.model";
import { Location } from "./location.model";
import { Physician } from "./physician.model";

export interface Patient {
  name: string;
  id: string;
  schedule: Day[];
  primaryNephrologist: Nephrologist;
  allergies: Allergy[] | null;
  homeClinic: Location;
  sex: Sex;
  dateOfBirth: Date;
  address?: Address;
  phoneNumber?: string;
  socialSecurityNumber?: string;
  dialysisStartDate?: Date;
  esrdCause?: ESRDCause,
  primaryCarePhysician?: Physician;
  insurance?: string;
  certificationNumber?: string;
  payer?: string;
  religion?: Religion;
  ethnicity?: Ethnicity;
  race?: Race;
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

export enum ESRDCause {
  hypertensionUnspecifiedRenalFailure = 'Hypertension unspecified with renal failure',
  diabetesRenalManifestationsTypeOne = 'Diabetes with renel manifestations Type 1',
}
