export interface BackgroundInformation {
  martialStatus: MartialStatus;
  religion?: Religion;
  language?: Language;
  citizenship?: Citizenship;
  ethnicity: Ethnicity;
  race: Race;
}

export enum MartialStatus {
  Married = 'Married',
  Divorced = 'Divorced',
  Separated = 'Separated',
  Widowed = 'Widowed',
  Single = 'Single',
  NotSpecified = 'Not Specified',
}

export enum Religion {
  Christianity = 'Christianity',
  Islam = 'Islam',
  Buddhism = 'Buddhism',
  Hinduism = 'Hinduism',
  Judaism = 'Judaism',
  NotSpecified = 'Not Specified',
}

export enum Language {
  English  = 'English',
  MandarinChinese = 'Mandarin Chinese',
  Hindi = 'Hindi',
  Spanish = 'Spanish',
  French = 'French',
  Arabic = 'Arabic',
  Bengali = 'Bengali',
  Russian = 'Russian',
  NotSpecified = 'Not Specified',
}

export enum Citizenship {
  ByBirth = 'By Birth',
  Naturalization = 'Naturalization',
  NotACitizen = 'Not a Citizen',
  NotSpecified = 'Not Specified'
}

export enum Ethnicity {
  HispanicOrLatino = 'Hispanic or Latino',
  NotHispanicOrLatino = 'Not Hispanic or Latino',
}

export enum Race {
  American = 'American',
  Indian = 'Indian',
  AlaskaNative = 'Alaska Native',
  Asian = 'Asian',
  BlackOrAfricanAmerican = 'Black or African American',
  NotHispanicOrLatino = 'Not Hispanic or Latino',
  NativeHawaiianOrOtherPacificIslander = 'Native Hawaiian or Other Pacific Islander',
  White = 'White',
}
