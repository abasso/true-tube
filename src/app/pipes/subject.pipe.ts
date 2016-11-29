import { Pipe, PipeTransform } from '@angular/core';
import _ from "lodash";

@Pipe({
  name: 'subject'
})
export class SubjectPipe implements PipeTransform {
  transform(value: any, subject?: any): any {
    return _.filter(value, subject);
  }
}
