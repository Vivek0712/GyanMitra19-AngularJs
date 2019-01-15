import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { DegreeService } from 'src/app/services/degree/degree.service';
import { AuthService } from 'src/app/services/auth/auth.service';
declare var M: any;
@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {

  constructor(private degreeService: DegreeService, public authService: AuthService, private formBuilder: FormBuilder) { }
  degreeForm: FormGroup;
  degrees: any;
  Button: any;
  submitted:boolean;
  currentPage:any;
  searchText: any;
  ngOnInit() {
    this.submitted=false;
    this.currentPage=1;
    this.createForm();
    this.getDegrees(this.currentPage);
    this.searchText = "";
  }
  nextPage(){
    this.currentPage = this.currentPage + 1;
    this.getDegrees(this.currentPage);
  }
  
  previousPage() {
    if(this.currentPage == 1) {
    }
    else{
      this.currentPage = this.currentPage -1;
      this.getDegrees(this.currentPage);
    }
  }
  get f() { return this.degreeForm.controls; }
  onSubmit(form: FormGroup) {
    this.submitted=true;
    if(form.valid){
      if ( form.value._id === '') {
        this.degreeService.createDegree( this.degreeForm.get('name').value).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getDegrees(this.currentPage);
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getDegrees(this.currentPage);
            this.createForm();
          }
        });
      } else {
        this.degreeService.updateDegree(form.value._id, form.value.name).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getDegrees(this.currentPage);
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getDegrees(this.currentPage);
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
    this.degreeForm = this.formBuilder.group({
      _id: '',
      name: ['',Validators.required]
    });
    this.Button = 'Create';
  }
  getDegrees(page: any) {
    this.degreeService.readDegree(page).subscribe((response: any) => {
     if(response.docs.legnth == 0){
       this.currentPage -=1;
     }
     else{
      this.degrees = response.docs;
     }
    });

  }
  deleteDegree(id: string) {
  this.degreeService.deleteDegree(id).subscribe((response: any) => {
    if ( response.error ) {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getDegrees(this.currentPage);
      this.createForm();
    } else {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getDegrees(this.currentPage);
      this.createForm();
    }
  });
  }
  updateDegree(id: string, name: string) {
    this.Button = 'Update';
    this.degreeForm.setValue({
      _id: id,
      name: name
    });
  }

}
