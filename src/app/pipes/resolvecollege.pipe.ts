import { Pipe, PipeTransform } from '@angular/core';
import { CollegeService } from 'src/app/services/college/college.service'

interface College{
  _id: string,
  name: string
}

@Pipe({
  name: 'resolvecollege'
})
export class ResolvecollegePipe implements PipeTransform {

  colleges:Array<any>

  constructor(private clgService: CollegeService){
    this.clgService.readCollege(0).subscribe((response: any) => {
      this.colleges = response;
    })
  }

  ngOnInit(){
    
  }

  getCollege(_id) {
    if(_id==''){
      return ''
    }
    else
    {
      return this.colleges.filter(
        function(data)
        { 
          return data._id == _id;
        }
    );
    }
  }
  

  transform(value: any): any {
    var found: any = this.getCollege(value);
    return found[0].name;
  }

}
