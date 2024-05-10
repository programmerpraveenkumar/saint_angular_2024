import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(value: any, ...args:[]): any[] {
    console.log("name filter",value);
    
    let filterName = value.filter(
          (obj:String)=>obj.startsWith('a')
      );
    return filterName;
  }

}
