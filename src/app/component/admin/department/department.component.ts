import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department/department.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SearchfilterPipe } from 'src/app/pipes/searchfilter.pipe';

declare var M: any;
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private departmentService: DepartmentService, private authService: AuthService, private formBuilder: FormBuilder) { }
  departmentForm: FormGroup;
  departments: any;
  Button: any;
  submitted:boolean;
  ngOnInit() {
    this.submitted=false;
    this.createForm();
    this.getDepartments();
  }
  get f() { return this.departmentForm.controls; }
  onSubmit(form: NgForm) {
    this.submitted=true;
    if(form.valid){
      if ( form.value._id === '') {
        this.departmentService.createDepartment( this.departmentForm.get('name').value).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getDepartments();
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getDepartments();
            this.createForm();
          }
        });
      } else {
        this.departmentService.updateDepartment(form.value._id, form.value.name).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getDepartments();
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getDepartments();
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
    this.departmentForm = this.formBuilder.group({
      _id: '',
      name: ['',Validators.required]
    });
    this.Button = 'Create';
  }
  getDepartments() {
    this.departmentService.readDepartment().subscribe((response: any) => {
     this.departments = response.docs;
    });

  }
  deleteDepartment(id: string) {
  this.departmentService.deleteDepartment(id).subscribe((response: any) => {
    if ( response.error ) {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getDepartments();
      this.createForm();
    } else {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getDepartments();
      this.createForm();
    }
  });
  }
  updateDepartment(id: string, name: string,locale:String ) {
    this.Button = 'Update';
    this.departmentForm.setValue({
      _id: id,
      name: name
    });
  }

}
