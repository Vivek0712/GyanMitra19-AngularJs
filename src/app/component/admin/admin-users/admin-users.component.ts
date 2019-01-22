import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RoleService } from 'src/app/services/role/role.service';

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
    //console.log(this.selectedRoles);
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
  onSubmit(value: any) {
    this.submitted = true;
  
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
}
