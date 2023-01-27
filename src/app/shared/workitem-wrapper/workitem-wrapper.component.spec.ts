import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkitemWrapperComponent } from './workitem-wrapper.component';

describe('WorkitemWrapperComponent', () => {
  let component: WorkitemWrapperComponent;
  let fixture: ComponentFixture<WorkitemWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkitemWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkitemWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
