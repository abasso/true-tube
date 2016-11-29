import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CategoryPipe'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, categories?: any, subcategories?: any): any {
    return value;
  }

}
