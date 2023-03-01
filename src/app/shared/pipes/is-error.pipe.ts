import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isError'
})
export class IsErrorPipe implements PipeTransform {

  transform(value: any[] | null | Function): boolean {
    return value !== null && typeof value === 'function';
  }

}
