import { TestBed } from '@angular/core/testing';

import { AdmissionsModalitiesService } from './admissions-modalities.service';

describe('AdmissionsModalitiesService', () => {
  let service: AdmissionsModalitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionsModalitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
