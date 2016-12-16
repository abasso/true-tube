import { Pipe, PipeTransform } from '@angular/core';
import _ from "lodash";

@Pipe({
  name: 'PaginationPipe',
  pure:false

})
export class PaginationPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let perPage = (args.itemsPerPageCurrent === "All") ? 100000 : args.itemsPerPageCurrent;
    let chunkedValue = _.chunk(value, perPage);
    return chunkedValue[args.currentPage];
  }
}
