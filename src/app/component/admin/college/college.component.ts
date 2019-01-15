import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { CollegeService } from 'src/app/services/college/college.service';
import { AuthService } from 'src/app/services/auth/auth.service';

import { SearchfilterPipe } from 'src/app/pipes/searchfilter.pipe'

declare var M: any;
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  constructor(private collegeService: CollegeService, public authService: AuthService, private formBuilder: FormBuilder) { }
  collegeForm: FormGroup;
  colleges: any;
  Button: any;
  submitted:boolean;
  page:any;
  searchText: any;
  ngOnInit() {
    this.submitted=false;
    this.page = 1;
    this.createForm();
    this.getColleges(1);
    this.searchText = "";
  }

  nextPage(){
    this.page = this.page + 1;
    this.getColleges(this.page);
  }
  
  previousPage() {
    if(this.page == 1) {
    }
    else{
      this.page = this.page -1;
      this.getColleges(this.page);
    }
  }

  get f() { return this.collegeForm.controls; }
  onSubmit(form: FormGroup) {
    this.submitted=true;
    if(form.valid){
      if ( form.value._id === '') {
        this.collegeService.createCollege( this.collegeForm.get('name').value,this.collegeForm.get('locale').value ).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getColleges(this.page);
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getColleges(this.page);
            this.createForm();
          }
        });
      } else {
        this.collegeService.updateCollege(form.value._id, form.value.name,form.value.locale).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getColleges(this.page);
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getColleges(this.page);
            this.createForm();
          }
        });
      }
    }else
    {
      M.toast({ html: 'Please Check The Form' , classes: 'roundeds'});
    }
   
  }
  createForm() {
    this.submitted=false;
    this.collegeForm = this.formBuilder.group({
      _id: '',
      name: ['',Validators.required],
      locale:['',Validators.required]
    });
    this.Button = 'Create';
  }
  getColleges(page: any) {
    this.collegeService.readCollege(page).subscribe((response: any) => {
     if(response.docs.length == 0){
       this.page -= 1;
     }
     else {
      this.colleges = response.docs;
     }
    });

  }
  deleteCollege(id: string) {
  this.collegeService.deleteCollege(id).subscribe((response: any) => {
    if ( response.error ) {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getColleges(this.page);
      this.createForm();
    } else {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getColleges(this.page);
      this.createForm();
    }
  });
  }
  updateCollege(id: string, name: string,locale:String ) {
    this.Button = 'Update';
    this.collegeForm.setValue({
      _id: id,
      name: name,
      locale: locale
    });
  }


}
