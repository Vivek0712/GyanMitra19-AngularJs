import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
declare var M: any;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  token: string = "";
  resetForm: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    this.createForm();
  }

  createForm() {
    this.resetForm = this.formBuilder.group({
      email_id: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      token: [this.token, Validators.required]
    });
  }
	get f() { return this.resetForm.controls; }
  onSubmit(values: any) {
    if (this.resetForm.valid) {
      const email_id = this.resetForm.value.email_id;
      const password = this.resetForm.value.password;
      const confirmPassword = this.resetForm.value.confirmPassword;
      const token = this.resetForm.value.token;
      if (password != confirmPassword) {
        M.toast({ html: 'Passwords do not match', classes: 'rounded' });
      } else {
        this.userService.resetPassword(email_id, password, token).subscribe((response: any) => {
          M.toast({ html: response.msg, classes: 'rounded' });
        })
      }
    }
  }
}
