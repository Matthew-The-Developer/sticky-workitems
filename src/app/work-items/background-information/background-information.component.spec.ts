import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundInformationComponent } from './background-information.component';

describe('BackgroundInformationComponent', () => {
  let component: BackgroundInformationComponent;
  let fixture: ComponentFixture<BackgroundInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
