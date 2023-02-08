export interface CoordinationBenefit {
  enterDate: Date;
  reviewDate: Date;
  verifiedDate: Date;
  enteredBy: string;
  status: CoordinationBenefitStatus;
  cobDate?: Date;
  recommendedPrimary: string;
  recommendedSecondary?: string;
}

export enum CoordinationBenefitStatus {
  Started = 'Started',
  InProgress = 'In Progress',
  Completed = 'Completed'
}
