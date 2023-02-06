import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsModalitiesFormComponent } from './admissions-modalities-form.component';

describe('AdmissionsModalitiesFormComponent', () => {
  let component: AdmissionsModalitiesFormComponent;
  let fixture: ComponentFixture<AdmissionsModalitiesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionsModalitiesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionsModalitiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
