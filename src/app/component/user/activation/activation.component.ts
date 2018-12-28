import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration/registration.service';
import { UserregistrationService } from 'src/app/services/userregistration/userregistration.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var M: any;
@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html'
})
export class ActivationComponent implements OnInit {
  param1: any;
  param2: any;
  constructor(private userRegisterService: UserregistrationService, private route: ActivatedRoute,private router:Router) {
  }
  ngOnInit() {
    this.route.params.subscribe(params =>
      this.userRegisterService.activateUser(params.id, params.hash).subscribe((response: any) => {
        if (response.sucess)
        {
          M.toast({ html: response.msg, classes: 'roundeds' });
        }
        else {
          M.toast({ html: response.msg, classes: 'roundeds' });
        }
      })
    );

  }
}
