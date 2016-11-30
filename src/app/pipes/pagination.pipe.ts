import { Pipe, PipeTransform } from '@angular/core';
import _ from "lodash";

@Pipe({
  name: 'PaginationPipe',
  pure:false

})
export class PaginationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log(args);
    console.log("THE PIPPPPPEEE");

    let chunkedValue = _.chunk(value, args.itemsPerPage);

    return chunkedValue[args.currentPage];
  }

}
