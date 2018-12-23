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
  constructor(private collegeService: CollegeService, private authService: AuthService, private formBuilder: FormBuilder) { }
  collegeForm: FormGroup;
  colleges: any;
  Button: any;
  submitted:boolean;
  ngOnInit() {
    this.submitted=false;
    this.createForm();
    this.getColleges();
  }
  get f() { return this.collegeForm.controls; }
  onSubmit(form: NgForm) {
    this.submitted=true;
    if(form.valid){
      if ( form.value._id === '') {
        this.collegeService.createCollege( this.collegeForm.get('name').value,this.collegeForm.get('locale').value ).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getColleges();
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getColleges();
            this.createForm();
          }
        });
      } else {
        this.collegeService.updateCollege(form.value._id, form.value.name,form.value.locale).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getColleges();
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getColleges();
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
  getColleges() {
    this.collegeService.readCollege().subscribe((response: any) => {
     this.colleges = response.docs;
    });

  }
  deleteCollege(id: string) {
  this.collegeService.deleteCollege(id).subscribe((response: any) => {
    if ( response.error ) {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getColleges();
      this.createForm();
    } else {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getColleges();
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
