import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array'
})
export class ArrayPipe implements PipeTransform {
  transform(value: any | null | (() => string)): any[] {
    if (value !== null && typeof value !== 'function') {
      return value;
    } else {
      return [];
    }
  }
}
