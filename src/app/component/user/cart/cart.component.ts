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
  constructor(private eventRegistrationService: EventRegistrationService) { 
    this.workshops = []
    this.user_id = JSON.parse(localStorage.getItem('user')).id;
  }

  ngOnInit() {
    this.getWorkshops();
  }

  cancelWorkshopRegistration(_id: string){
    this.eventRegistrationService.cancelWorkshopRegistration(this.user_id).subscribe((response: any)=>{
      if(response.error == true){
        M.toast({ html: response.msg, classes: 'roundeds danger' });
      }
      else{
        this.workshops = response;
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
      }
    })
  }

}
