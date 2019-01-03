import { Component, OnInit } from '@angular/core';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';

declare var M: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  workshops : any;
  user_id : string;
  hasWorkshops: boolean;
  constructor(private eventRegistrationService: EventRegistrationService) { 
    this.workshops = []
    this.hasWorkshops = false;
    this.user_id = JSON.parse(localStorage.getItem('user')).id;
  }

  ngOnInit() {
    this.getWorkshops();
  }

  cancelWorkshopRegistration(_id: string){
    this.eventRegistrationService.cancelWorkshopRegistration(_id).subscribe((response: any)=>{
      if(response.error == true){
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
      else{
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getWorkshops();
      }
    })
  }

  getWorkshops(){
    this.eventRegistrationService.getWorkshops(this.user_id).subscribe((response: any)=>{
      if(response.error == true){
        M.toast({ html: response.msg, classes: 'roundeds danger' });
      }
      else{
        this.workshops = response;
        if(this.workshops.length == 0){
          this.hasWorkshops = false;
        }
        else{
          this.hasWorkshops = true;
        }
      }
    })
  }

}
