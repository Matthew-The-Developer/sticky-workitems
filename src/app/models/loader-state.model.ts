export interface LoaderState {
  successful: boolean;
  min: number;
  max: number;
}

export enum LoaderTime {
  None = 'None',
  OneToThree = 'One to Three',
  ThreeToFive = 'Three to Five',
  FiveToTen = 'Five to Ten',
  FiveToTenMin = 'Five to Ten Minutes'
}
