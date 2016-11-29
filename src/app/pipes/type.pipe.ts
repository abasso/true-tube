import { Pipe, PipeTransform } from '@angular/core';
import _ from "lodash";

@Pipe({
  name: 'TypePipe',
  pure:false
})
export class TypePipe implements PipeTransform {
  filteredResults = [];
  transform(value: string, types?: any): any {
    // Iterate over each item and each type within each item and check each type against the types selected
    this.filteredResults.length = 0;
    _.forEach(value, (item) => {
      _.forEach(item.types, (itemType) => {
        _.forEach(types, (value, key) => {
          if(key === itemType.label && value === true) this.filteredResults.push(item);
        });
      });
    });
    this.filteredResults = _.uniq(this.filteredResults);

    let typesObject = _.values(types);
    typesObject = _.uniq(typesObject);

    let result = (typesObject.length > 1) ? this.filteredResults : value;
    return result;
  }

}
