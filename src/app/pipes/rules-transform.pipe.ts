import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rulesTransform'
})
export class RulesTransformPipe implements PipeTransform {

  transform(input: any, args?: any): any {
    var arr = input.split('$');
    return arr;
  }

}
