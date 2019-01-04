import { Component, OnInit } from '@angular/core';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';

declare var M: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  workshops: any;
  events: any;
  user_id: string;
  hasWorkshops: boolean;
  hasEvents: boolean;
  constructor(private eventRegistrationService: EventRegistrationService) {
    this.workshops = []
    this.hasWorkshops = false;
    this.hasEvents = false;
    this.user_id = JSON.parse(localStorage.getItem('user')).id;
  }

  ngOnInit() {
    this.getWorkshops();
    this.getEvents();
  }

  cancelWorkshopRegistration(_id: string) {
    this.eventRegistrationService.cancelWorkshopRegistration(_id).subscribe((response: any) => {
      if (response.error == true) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
      else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getWorkshops();
      }
    })
  }

  cancelEventRegistration(_id: string) {
    this.eventRegistrationService.cancelEventRegistration(_id).subscribe((response: any) => {
      if (response.error == true) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
      else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getEvents();
      }
    })
  }

  getWorkshops() {
    this.eventRegistrationService.getWorkshops(this.user_id).subscribe((response: any) => {
      if (response.error == true) {
        M.toast({ html: response.msg, classes: 'roundeds danger' });
      }
      else {
        this.workshops = response;
        if (this.workshops.length == 0) {
          this.hasWorkshops = false;
        }
        else {
          this.hasWorkshops = true;
        }
      }
    })
  }
  
  getEvents() {
    this.eventRegistrationService.getEventRegistrations(this.user_id).subscribe((response: any) => {
      if (response.error == true) {
        M.toast({ html: response.msg, classes: 'roundeds danger' });
      }
      else {
        this.events = response;
        console.log(response);
        if (this.events.length == 0) {
          this.hasEvents = false;
        }
        else {
          this.hasEvents = true;
        }
      }
    })
  }


}
