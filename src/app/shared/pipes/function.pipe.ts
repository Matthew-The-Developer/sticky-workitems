import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'function'
})
export class FunctionPipe implements PipeTransform {

  transform(value: any[] | null | (() => string)): (() => any) {
    if (value !== null && typeof value === 'function') {
      return value
    } else {
      return () => null;
    }
  }

}
