import { Pipe, PipeTransform } from '@angular/core';
import _ from "lodash";

@Pipe({
  name: 'CategoryPipe'
})
export class CategoryPipe implements PipeTransform {
  filteredResults = [];
  transform(value: any, categories?: any, subcategories?: any): any {
    this.filteredResults.length = 0;
    if(subcategories.length) {
      _.forEach(value, (item) => {
        _.forEach(item.subcategories, (itemSubCategory) => {
          _.forEach(subcategories, (subCategory) => {
            if(itemSubCategory === subCategory) {
              this.filteredResults.push(item);
            }
          });
        });
      });
      return this.filteredResults;
    } else if(categories.length) {
      _.forEach(value, (item) => {
        _.forEach(item.categories, (itemCategory) => {
          _.forEach(categories, (category) => {
            if(itemCategory === category) {
              this.filteredResults.push(item);
            }
          });
        });
      });
      return this.filteredResults;
    } else {
        return value;
    }
  }

}
