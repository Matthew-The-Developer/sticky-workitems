import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderTemplateComponent } from './loader-template.component';

describe('LoaderTemplateComponent', () => {
  let component: LoaderTemplateComponent;
  let fixture: ComponentFixture<LoaderTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
