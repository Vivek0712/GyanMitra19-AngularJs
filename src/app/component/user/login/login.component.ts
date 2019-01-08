import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService,private router: Router, private formBuilder: FormBuilder) { }
  loginForm: FormGroup;
  Button: any;
  submitted = false;
  ngOnInit() {
    this.createForm();
  }
  get f() { return this.loginForm.controls; }
  //Create Form is Used to Initalize the Values the Form
  createForm(){
    this.Button="Login"
    this.submitted=false;
    this.loginForm = this.formBuilder.group({
      email_id:['',Validators.required],
      password:['',Validators.required]
    });
  }
  //The action performed After the Button is Pressed
  onSubmit(values: any) {
    this.submitted=true;
    this.Button="Checking......."
    if(this.loginForm.valid){
      const email_id = this.loginForm.value.email_id;
      const password = this.loginForm.value.password;
      this.authService.authenticate(email_id, password).subscribe((response: any) => {
        if (response.success) {
            if (response.user.type === 'student') {
              this.router.navigate(['/user/home']);
            } else {
              this.router.navigate(['/admin/home']);
            }
              this.authService.createSession(response);
        } else {
          // Create session for the user
          M.toast({ html: response.msg, classes: 'rounded' });
          this.loginForm.reset();
        }
      });
    }else{
      M.toast({ html: 'Please Check the Form', classes: 'rounded' });
      this.Button="Login";
    }
  }
}
