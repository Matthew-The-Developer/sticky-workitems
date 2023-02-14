import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHeaderWapperComponent } from './patient-header-wapper.component';

describe('PatientHeaderWapperComponent', () => {
  let component: PatientHeaderWapperComponent;
  let fixture: ComponentFixture<PatientHeaderWapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHeaderWapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHeaderWapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
