import { TestBed } from '@angular/core/testing';

import { CoordinationOfBenefitsService } from './coordination-of-benefits.service';

describe('CoordinationOfBenefitsService', () => {
  let service: CoordinationOfBenefitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinationOfBenefitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
