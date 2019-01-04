import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEventsBasedOnDepartment'
})
export class FilterEventsBasedOnDepartmentPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(it => {
      if (it.department_id.name != undefined) {
        return it.department_id.name.toLowerCase().includes(searchText);
      }
      else {
        return true
      }
    });
  }

}
