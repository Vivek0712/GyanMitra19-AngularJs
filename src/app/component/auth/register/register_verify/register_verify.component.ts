import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration/registration.service';
import { UserregistrationService } from 'src/app/services/userregistration/userregistration.service';

@Component({
  selector: 'app-register_verify',
  templateUrl: './register_verify.component.html',
  styleUrls: ['./register_verify.component.css']
})
export class RegisterVerifyComponent implements OnInit {

  constructor(private userRegisterService: UserregistrationService) {
    this.verifyUser();  
  }
  content1 = "Activation Link has been sent to your mail";
  content2 = "Please click the link to activate your Account";
  ngOnInit() {
  }
  verifyUser(){ 
    this.userRegisterService.verifyUser(localStorage.getItem('curentUserMail')).subscribe((response: any) => {
      if(response.sucess){
        this.content1 = "Your Account has been activated";
        this.content2 = "";
        // Navigate to user Dashboard 
        // After dashboard completed
      }
    });
   }
}
