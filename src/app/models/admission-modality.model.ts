import { Location } from "./location.model";

export interface AdmissionModality {
  location: Location;
  isTransient: boolean;
  hospitalServices?: boolean;
  admissionDate: Date;
  admissionReason: AdmissionReason;
  dischargeDate?: Date;
  dischargeReason?: DischargeReason;
  modalities: Modality[],
  nephrologists: Nephrologist[],
}

export enum AdmissionReason {
  PreDialysisSupport = "Pre Dialysis Support",
  TransferInAsKidney = "Transfer in as Kidney",
}

export enum DischargeReason {
  Death = "Death",
  DeclaredESRD = "Declared ESRD",
  DiscontinedDialysis = "Discontined Dialysis",
  LostToFollowUp = "Lost to Follow-up",
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