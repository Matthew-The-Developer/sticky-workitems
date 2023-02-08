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
  Pending = 'Pending',
  InProgress = 'In Progress',
  Completed = 'Completed'
}
