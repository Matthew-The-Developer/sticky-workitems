export interface AdmissionModality {
  location: Location;
  hospitalServices?: boolean;
  admissionDate: Date;
  admissionReason: AdmissionReason;
  dischargeDate?: Date;
  dischargeReason?: DischargeReason;
  modalities: Modality[],
  nephrologists: Nephrologist[],
}

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

export enum AdmissionReason {
  PreDialysisSupport = "Pre Dialysis Support",
  TransferInAsKidney = "Transfer in as Kidney",
}

export enum DischargeReason {
  Death = "Death",
  DeclaredESRD = "Declared ESRD",
}

export interface Modality {
  type: ModalityType;
  startDate: Date;
  endDate?: Date;
}

export enum ModalityType {
  HemoHome = "Hemo: Chronic: Home",
  HemoInCenter = "Hemo: Chronic: In-Center",
}

export interface Nephrologist {
  name: string;
  startDate: Date;
}