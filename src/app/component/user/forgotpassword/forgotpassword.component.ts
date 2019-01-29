import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
declare var M: any;

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  resetForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.resetForm = this.formBuilder.group({
      email_id: ['', Validators.required],
    });
  }
	get f() { return this.resetForm.controls; }
  onSubmit(values: any) {
    if (this.resetForm.valid) {
      const email_id = this.resetForm.value.email_id;
      this.userService.forgotPassword(email_id).subscribe((response: any) => {
        console.log(response)
        if (response.error) {
          M.toast({ html: 'An Error Occured', classes: 'rounded' });
        } else {
          M.toast({ html: response.msg, classes: 'rounded' });
        }
      })
    } else {
      M.toast({ html: 'Form Data invalid', classes: 'rounded' });
    }
  }
}
