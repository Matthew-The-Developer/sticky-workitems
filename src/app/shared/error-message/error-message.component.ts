import { AfterViewInit, ChangeDetectorRef, Component, Injector, Input, OnInit } from '@angular/core';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { startWith } from 'rxjs';

const errorMap = {
  required: 'This value is required.',
  minlength: 'This value length should be longer.',
  maxlength: 'This value should be shorter',
  pattern: 'This value is invalid',
  min: 'This value is too low ',
  max: 'This value is too high',
  matDatepickerMax: 'Date can not be in the future',
  incorrectDescription: 'The Description doesn\'t match the content',
  email: 'Invalid email format',
  matDatepickerParse: 'Invalid date format',
  matDatepickerMin: 'Date is too early',
};

@Component({
  selector: '[matErrorMessage]',
  template: '{{ error }}',
  styles: []
})
export class ErrorMessageComponent implements AfterViewInit {
  @Input() map: Object = {};
  public error = '';
  private inputRef!: MatFormFieldControl<MatInput>;
  private errorMap: object = {};

  constructor(
    private _inj: Injector,
    private cdr: ChangeDetectorRef
  ) { }
  
  ngAfterViewInit(): void {
    this.errorMap = {
      ...errorMap,
      ...this.map
    };

    const container = this._inj.get<MatFormField>(MatFormField);
    this.inputRef = container._control;
    this.inputRef.ngControl?.statusChanges?.pipe(startWith(this.inputRef.ngControl.status)).subscribe(this.updateErrors);
  }

  private updateErrors = (state: 'VALID' | 'INVALID') => {
    if (state === 'INVALID') {
      const errors = this.inputRef.ngControl?.errors;
      const firstError = Object.keys(errors!)[0];
      if (this.errorMap[firstError as keyof typeof this.errorMap]) {
        this.error = this.errorMap[firstError as keyof typeof this.errorMap];
        this.cdr.detectChanges();
      } else {
        this.error = errors![firstError];
        this.cdr.detectChanges();
      }
    }
  };
}
