import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
<<<<<<< HEAD
   }

=======
  }
>>>>>>> 73bbf5a3ef82509a38acca831e1aec404d2fa97e
}
