import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinationOfBenefitsComponent } from './coordination-of-benefits.component';

describe('CoordinationOfBenefitsComponent', () => {
  let component: CoordinationOfBenefitsComponent;
  let fixture: ComponentFixture<CoordinationOfBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinationOfBenefitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinationOfBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
