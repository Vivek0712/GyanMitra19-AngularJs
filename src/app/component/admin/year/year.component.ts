import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { YearService } from 'src/app/services/year/year.service';
import { AuthService } from 'src/app/services/auth/auth.service';
declare var M: any;

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  constructor(private yearService: YearService, public authService: AuthService, private formBuilder: FormBuilder) { }
  yearForm: FormGroup;
  years: any;
  Button: any;
  submitted:boolean;
  currentPage:any;
  searchText: any;
  ngOnInit() {
    this.submitted=false;
    this.currentPage=1;
    this.createForm();
    this.getYears(this.currentPage);
    this.searchText = "";
  }
  nextPage(){
    this.currentPage = this.currentPage + 1;
    this.getYears(this.currentPage);
  }
  
  previousPage() {
    if(this.currentPage == 1) {
    }
    else{
      this.currentPage = this.currentPage -1;
      this.getYears(this.currentPage);
    }
  }
  get f() { return this.yearForm.controls; }
  onSubmit(form: FormGroup) {
    this.submitted=true;
    if(form.valid){
      if ( form.value._id === '') {
        this.yearService.createYear( this.yearForm.get('name').value).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getYears(this.currentPage);
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getYears(this.currentPage);
            this.createForm();
          }
        });
      } else {
        this.yearService.updateYear(form.value._id, form.value.name).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getYears(this.currentPage);
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getYears(this.currentPage);
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
    this.yearForm = this.formBuilder.group({
      _id: '',
      name: ['',Validators.required]
    });
    this.Button = 'Create';
  }
  getYears(page: any) {
    this.yearService.readYear(page).subscribe((response: any) => {
     this.years = response.docs;
    });

  }
  deleteYear(id: string) {
  this.yearService.deleteYear(id).subscribe((response: any) => {
    if ( response.error ) {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getYears(this.currentPage);
      this.createForm();
    } else {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getYears(this.currentPage);
      this.createForm();
    }
  });
  }
  updateYear(id: string, name: string) {
    this.Button = 'Update';
    this.yearForm.setValue({
      _id: id,
      name: name
    });
  }

}
