import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TypeFilterPipe'
})
export class TypeFilterPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return value;
  }
}
