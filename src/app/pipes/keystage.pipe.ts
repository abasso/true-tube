import { Pipe, PipeTransform } from '@angular/core';
import _ from "lodash";
@Pipe({
  name: 'KeystagePipe',
  pure:false
})
export class KeystagePipe implements PipeTransform {
  filteredResults = [];
  transform(value: string, keystages?: any): any {
    this.filteredResults.length = 0;
    _.forEach(value, (item) => {
      _.forEach(item.keystages, (itemKey) => {
        _.forEach(keystages, (key) => {
          let numberKey = parseInt(key)
          if(numberKey === itemKey) {
            this.filteredResults.push(item);
          }
        });
      });
    });
    this.filteredResults = _.uniq(this.filteredResults);
    let result = (keystages.length === 5 || keystages.length === 0) ? value : this.filteredResults;
    return result;
  }

}
