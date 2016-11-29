import { Pipe, PipeTransform } from '@angular/core';
import _ from "lodash";

@Pipe({
  name: 'CategoryPipe',
  pure:false
})
export class CategoryPipe implements PipeTransform {
  filteredResults = [];
  transform(value: string, categories?: any): any {
    // Iterate over each item and each category within each item and check each category against the categories selected
    this.filteredResults.length = 0;
    _.forEach(value, (item) => {
      _.forEach(item.categories, (itemCategory) => {
        _.forEach(categories, (value, key) => {
          if(key === itemCategory.label && value === true) this.filteredResults.push(item);
        });
      });
    });
    this.filteredResults = _.uniq(this.filteredResults);

    let categoriesObject = _.values(categories);
    categoriesObject = _.uniq(categoriesObject);

    let result = (categoriesObject.length > 1) ? this.filteredResults : value;
    return result;
  }

}
