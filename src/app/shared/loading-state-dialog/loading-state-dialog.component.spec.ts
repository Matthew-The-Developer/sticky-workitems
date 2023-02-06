import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingStateDialogComponent } from './loading-state-dialog.component';

describe('LoadingStateDialogComponent', () => {
  let component: LoadingStateDialogComponent;
  let fixture: ComponentFixture<LoadingStateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingStateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingStateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
