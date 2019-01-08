import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rulesTransform'
})
export class RulesTransformPipe implements PipeTransform {

  transform(input: any, args?: any): any {
    console.log(input);
    var arr = input.split('$');
    return arr;
  }

}
