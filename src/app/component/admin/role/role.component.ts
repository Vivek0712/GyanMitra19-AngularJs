import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { RoleService } from 'src/app/services/role/role.service';
import { AuthService } from 'src/app/services/auth/auth.service';
declare var M: any;

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private roleService: RoleService, public authService: AuthService, private formBuilder: FormBuilder) { }
  roleForm: FormGroup;
  roles: any;
  Button: any;
  submitted:boolean;
  currentPage:any;
  searchText: any;
  ngOnInit() {
    this.submitted=false;
    this.currentPage=1;
    this.createForm();
    this.getRoles(this.currentPage);
    this.searchText = "";
  }
  nextPage(){
    this.currentPage = this.currentPage + 1;
    this.getRoles(this.currentPage);
  }
  
  previousPage() {
    if(this.currentPage == 1) {
    }
    else{
      this.currentPage = this.currentPage -1;
      this.getRoles(this.currentPage);
    }
  }
  get f() { return this.roleForm.controls; }
  onSubmit(form: FormGroup) {
    this.submitted=true;
    if(form.valid){
      if ( this.roleForm.get('_id').value == '') {
        this.roleService.createRole( this.roleForm.get('name').value).subscribe((response: any) => {
          console.log("Hello");
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getRoles(this.currentPage);
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getRoles(this.currentPage);
            this.createForm();
          }
        });
      } else {
        this.roleService.updateRole(form.value._id, form.value.name).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getRoles(this.currentPage);
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getRoles(this.currentPage);
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
    this.roleForm = this.formBuilder.group({
      _id: '',
      name: ['',Validators.required]
    });
    this.Button = 'Create';
  }
  getRoles(page: any) {
    this.roleService.readRole(page).subscribe((response: any) => {
     this.roles = response.msg.docs;
    });

  }
  deleteRole(id: string) {
    this.roleService.deleteRole(id).subscribe((response: any) => {
      if ( response.error ) {
        M.toast({ html: response.msg , classes: 'roundeds'});
        this.getRoles(this.currentPage);
        this.createForm();
      } else {
        M.toast({ html: response.msg , classes: 'roundeds'});
        this.getRoles(this.currentPage);
        this.createForm();
      }
    });
  }
  updateRole(id: string, name: string) {
    this.Button = 'Update';
    this.roleForm.setValue({
      _id: id,
      name: name
    });
  }

}
