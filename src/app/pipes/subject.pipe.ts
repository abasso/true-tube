import { Pipe, PipeTransform } from '@angular/core';
import _ from "lodash";

@Pipe({
  name: 'SubjectPipe'
})
export class SubjectPipe implements PipeTransform {
  transform(value: any, subject?: any): any {
    return (subject === "All") ? value : _.filter(value, {subject: subject});
  }
}
