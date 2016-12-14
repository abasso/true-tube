import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TransformPipe'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);

    return value;
  }

}
