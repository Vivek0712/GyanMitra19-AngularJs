import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { RoleService } from 'src/app/services/role/role.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RoleUserService } from 'src/app/services/role_user/role-user.service';
import { DepartmentService } from 'src/app/services/department/department.service';

declare var M:any;

@Component({
  selector: 'app-admin-user-roles',
  templateUrl: './admin-user-roles.component.html',
  styleUrls: ['./admin-user-roles.component.css']
})
export class AdminUserRolesComponent implements OnInit {
  roles:Array<any>
  users:Array<any>;
  roleUserForm: FormGroup;
  Button: String;
  submitted:Boolean;
  roleUsers:any;
  departments:any;
  constructor(private deptService: DepartmentService,private roleUserService:RoleUserService,private userService:UserService,private roleService: RoleService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getRoles();
    this.getUsers();
    this.createForm();
    this.getRoleUser();
    this.getDepartments();
  }

  createForm() {
    this.Button = "Set";
    this.submitted = false;
    this.roleUserForm = this.formBuilder.group({
      _id:[''],
      user_id: [''],
      role_id: [''],
      department_id: ['']
    })
  }

  getRoles() {
    this.roleService.readRoles().subscribe((response:any)=>{
      this.roles=response.msg.docs;
    })
  }

  getUsers(){
    this.userService.getAdmin().subscribe((response:any)=>{
      this.users = response.msg;
    })
  }

  getRoleUser(){
    this.roleUserService.readRoleUser().subscribe((response: any)=>{
      this.roleUsers = response;
    })
  }

  getDepartments(){
    this.deptService.readDepartment(0).subscribe((response:any)=>{
      this.departments = response;
    })
  }

  onSubmit(form: FormGroup) {
    this.submitted=true;
    if(form.valid){
      if ( this.roleUserForm.get('_id').value == '') {
        this.roleUserService.createRoleUser( this.roleUserForm.get('role_id').value,this.roleUserForm.get('user_id').value,this.roleUserForm.get('department_id').value).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getRoleUser();
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getRoleUser();
            this.createForm();
          }
        });
      } else {
        this.roleUserService.updateRoleUser(this.roleUserForm.get('_id').value,this.roleUserForm.get('role_id').value,this.roleUserForm.get('user_id').value,this.roleUserForm.get('department_id').value).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getRoleUser();
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getRoleUser();
            this.createForm();
          }
        });
      }
    }else
    {
      M.toast({ html: 'Please Check The Form' , classes: 'roundeds'});
    }
  }
  deleteRoleUser(id: string) {
    this.roleUserService.deleteRoleUser(id).subscribe((response: any) => {
      if ( response.error ) {
        M.toast({ html: response.msg , classes: 'roundeds'});
        this.getRoleUser();
        this.createForm();
      } else {
        M.toast({ html: response.msg , classes: 'roundeds'});
        this.getRoleUser();
        this.createForm();
      }
    });
  }
  updateRoleUser(id: string, user_id: string,role_id: string,department_id: string) {
    this.Button = 'Update';
    this.roleUserForm.setValue({
      _id: id,
      user_id: user_id,
      role_id: role_id,
      department_id: department_id
    });
  }

}
