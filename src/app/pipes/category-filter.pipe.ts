import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CategoryFilterPipe'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return value;
  }
}
