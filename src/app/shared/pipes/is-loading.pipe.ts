import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isLoading'
})
export class IsLoadingPipe implements PipeTransform {
  transform(value: any[] | null | Function): boolean {
    return value === null;
  }
}
