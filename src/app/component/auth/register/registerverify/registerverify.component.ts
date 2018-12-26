import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration/registration.service';
import { UserregistrationService } from 'src/app/services/userregistration/userregistration.service';

@Component({
  selector: 'app-registerverify',
  templateUrl: './registerverify.component.html',
  styleUrls: ['./registerverify.component.css']
})
export class RegisterverifyComponent implements OnInit {

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
