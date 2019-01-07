import { Component, OnInit } from '@angular/core';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
declare var M: any;

@Component({
  selector: 'app-admin-cart-confirmation',
  templateUrl: './admin-cart-confirmation.component.html',
  styleUrls: ['./admin-cart-confirmation.component.css']
})
export class AdminCartConfirmationComponent implements OnInit {
  events: Array<any> = [];
  workshops: Array<any> = [];
  amount: any;
  unconfirmedUsers: Array<any> = [];
  ddImage: string;
  selectedUser: string;
  constructor(private eventRegistrtationService: EventRegistrationService) { }

  ngOnInit() {
    this.loadUnconfirmedDDPayments();
  }

  loadDD(user_id: string, dd_image: string) {
    this.loadEvents(user_id);
    this.loadWorkshops(user_id);
    this.selectedUser = user_id;
    this.ddImage = "http://localhost:3000/assests/images/cart/" + dd_image;
  }

  confirmPayment(_id: string) {
    this.eventRegistrtationService.confirmPayment(this.selectedUser).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadUnconfirmedDDPayments()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadUnconfirmedDDPayments()
      }
    })
  }

  refusePayment(_id: string) {

  }

  loadUnconfirmedDDPayments() {
    this.eventRegistrtationService.getUnconfirmedDDPayments().subscribe((response: any) => {
      this.unconfirmedUsers = response;
    })
  }

  loadEvents(_id: string) {
    this.eventRegistrtationService.getEventRegistrations(_id).subscribe((response: any) => {
      this.events = response;
      this.calculateAmount();

    })
  }

  loadWorkshops(_id: string) {
    this.eventRegistrtationService.getWorkshops(_id).subscribe((response: any) => {
      this.workshops = response;
      this.calculateAmount();

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

