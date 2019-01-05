import { Component, OnInit } from '@angular/core';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
declare var M: any;

@Component({
  selector: 'app-admin-cart-confirmation',
  templateUrl: './admin-cart-confirmation.component.html',
  styleUrls: ['./admin-cart-confirmation.component.css']
})
export class AdminCartConfirmationComponent implements OnInit {
  events: any;
  workshops: any;
  amount: any;

  constructor(private eventRegistrtationService: EventRegistrationService) { }

  ngOnInit() {
    this.loadEvents('5c2f9c3d29b43c4445955ed5');
  }

  loadEvents(_id: string) {
    this.eventRegistrtationService.getEventRegistrations(_id).subscribe((response: any) => {
      console.log(response);
    })
  }

  getEvents(_id: string) {
    this.eventRegistrtationService.getEventRegistrations(_id).subscribe((response: any) => {
      if (response.error == true) {
        M.toast({ html: response.msg, classes: 'roundeds danger' });
      }
      else {
        this.events = response;
        this.calculateAmount()
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
