import { TestBed } from '@angular/core/testing';

import { BackgroundInformationService } from './background-information.service';

describe('BackgroundInformationService', () => {
  let service: BackgroundInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
