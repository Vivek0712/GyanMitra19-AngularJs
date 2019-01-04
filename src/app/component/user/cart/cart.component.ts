import { Component, OnInit } from '@angular/core';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { UserService } from 'src/app/services/user/user.service';

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
  amount: any;
  constructor(private eventRegistrationService: EventRegistrationService, private userService: UserService) {
    this.workshops = []
    this.events = []
    this.hasWorkshops = false;
    this.hasEvents = false;
    this.user_id = JSON.parse(localStorage.getItem('user')).id;
  }

  ngOnInit() {
    this.amount = 0;
    this.getWorkshops();
    this.getEvents();
    this.calculateAmount();
  }

  confirmCart() {
    this.userService.confirmCart(this.user_id).subscribe((response: any) => {
      if (response.error == true) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
      else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getWorkshops();
        this.calculateAmount();

      }
    })
  }

  cancelWorkshopRegistration(_id: string) {
    this.eventRegistrationService.cancelWorkshopRegistration(_id).subscribe((response: any) => {
      if (response.error == true) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
      else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getWorkshops();
        this.calculateAmount();

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
        this.calculateAmount();

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
        this.calculateAmount();

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
        this.calculateAmount()
        if (this.events.length == 0) {
          this.hasEvents = false;
        }
        else {
          this.hasEvents = true;
        }
      }
    })
  }

  calculateAmount() {
    this.amount = 0;
    this.workshops.forEach(workshop => {
      this.amount += workshop.event_id.amount;
    });
    if (this.events.length != 0) {
      this.amount += 200;
    }
  }
}