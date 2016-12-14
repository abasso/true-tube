import { Pipe, PipeTransform } from '@angular/core';
import _ from "lodash";

@Pipe({
  name: 'CategoryPipe'
})
export class CategoryPipe implements PipeTransform {
  filteredResults = [];
  transform(value: any, category?: any, subCategories?: any): any {
    this.filteredResults.length = 0;
    if(subCategories.length) {
      _.forEach(value, (item) => {
        console.log(item);
        _.forEach(item.subCategories, (itemSubCategory) => {
          _.forEach(subCategories, (subCategory) => {
            if(itemSubCategory === subCategory) {
              this.filteredResults.push(item);
            }
          });
        });
      });
      return this.filteredResults;
    } else if(category) {
      _.forEach(value, (item) => {
        _.forEach(item.categories, (itemCategory) => {
          if(itemCategory === category) {
            this.filteredResults.push(item);
          }
        });
      });
      return this.filteredResults;
    } else {
        return value;
    }
  }

}
