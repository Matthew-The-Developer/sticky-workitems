import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsModalitiesComponent } from './admissions-modalities.component';

describe('AdmissionsModalitiesComponent', () => {
  let component: AdmissionsModalitiesComponent;
  let fixture: ComponentFixture<AdmissionsModalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionsModalitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionsModalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
