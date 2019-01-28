import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RoleService } from 'src/app/services/role/role.service';

declare var M:any;

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private userService: UserService,private formBuilder: FormBuilder,private roleService:RoleService) { }

  userForm: FormGroup;
  Button: any;
  roles: Array<any>;
  roles_form: FormArray;
  selectedRoles: Array<any>;
  users: Array<any>;
  submitted: boolean;
  searchText: any;
  ngOnInit() {
    this.submitted = false;
    this.selectedRoles = [];
    this.getRoles();
    this.createForm();
    this.getAdmins();
    this.searchText="";
    //this.addRoleCheckBox();
  }
  get f() { return this.userForm.controls; }

  append(_id:string){
    if(this.selectedRoles.includes(_id)){
      this.selectedRoles.splice(this.selectedRoles.indexOf(_id),1)
    }
    else{
      this.selectedRoles.push(_id)
    }
  }

  createForm() {
    this.Button = "Create";
    this.submitted = false;
    this.userForm = this.formBuilder.group({
      _id:[''],
      name: [''],
      email_id: [''],
      password: [''],
      confirm_password: [''],
      roles_form:this.formBuilder.array([])
    })
  }
  getRoles() {
    this.roleService.readRoles().subscribe((response: any) => {
      this.roles = response.docs;
    });
  }
  onSubmit(form: FormGroup) {
    this.submitted = true;
    if(form.valid){
        if(this.userForm.get('password').value === this.userForm.get('confirm_password').value) {
          const body={
            name:this.userForm.get('name').value,
            email_id: this.userForm.get('email_id').value,
            password: this.userForm.get('password').value,
            type:"admin"
          }
          this.userService.createUser(body).subscribe((response: any) => {
            if ( response.error ) {
              M.toast({ html: response.msg , classes: 'roundeds'});
              this.getAdmins();
              this.createForm();
            } else {
              M.toast({ html: response.msg , classes: 'roundeds'});
              this.getAdmins();
              this.createForm();
            }
          });
        }
        else {
          M.toast({ html: "password does'nt match", classes: 'roundeds'});          
        }
      }
    else
    {
      M.toast({ html: 'Please Check The Form' , classes: 'roundeds'});
    }
  }

  addRoleCheckBox(): void {
    for (let role of this.roles) {
     this.roles_form = this.userForm.get('roles_form') as FormArray;
    this.roles_form.push(this.createRoleCheckBox());
    }
    
  }
  createRoleCheckBox(): FormGroup {
    return this.formBuilder.group({
      role_id: ['']
    });
  }
  getAdmins(){
    this.userService.getAdmin().subscribe((response: any) => {
      this.users = response.msg;
    })
  }

  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe((response:any)=>{
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getAdmins();
    })
  }
}
