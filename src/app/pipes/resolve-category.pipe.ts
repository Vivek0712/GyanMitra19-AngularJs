import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resolveCategory'
})
export class ResolveCategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
