import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    let values:Boolean;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      if(it.name != undefined){
        values = it.name.toLowerCase().includes(searchText);
      }
      if (it.title != undefined && !values){
        values = it.title.toLowerCase().includes(searchText);
      }
      if (it.email_id != undefined && !values) {
        values = it.email_id.toLowerCase().includes(searchText);
      }
      if (it.mobile_number != undefined && !values) {
        values =  it.mobile_number.toLowerCase().includes(searchText);
      }
      // if (it.user_id.name != undefined && !values) {
      //   values =  it.user_id.name.toLowerCase().includes(searchText);
      // }
      // if (it.user_id.email_id != undefined && !values) {
      //   values =  it.user_id.email_id.toLowerCase().includes(searchText);
      // }
      // if (it.user_id.mobile_number != undefined && !values) {
      //   values =  it.user_id.mobile_number.toLowerCase().includes(searchText);
      // }
      return values;
      
    });
   }
  }
