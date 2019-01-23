import { Component, OnInit } from '@angular/core';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { AppService } from 'src/app/services/app/app.service';
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
  constructor(private eventRegistrtationService: EventRegistrationService, public appService: AppService) { }

  ngOnInit() {
    this.loadUnconfirmedDDPayments();
  }

  loadDD(user_id: string, dd_image: string) {
    this.loadEvents(user_id);
    this.loadWorkshops(user_id);
    this.selectedUser = user_id;
    this.ddImage = "http://localhost:3000/assests/images/cart/" + dd_image;
  }

  confirmPayment() {
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

  refusePayment() {
    this.eventRegistrtationService.refusePayment(this.selectedUser).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadUnconfirmedDDPayments()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadUnconfirmedDDPayments()
      }
    })
  }

  loadUnconfirmedDDPayments() {
    this.eventRegistrtationService.getUnconfirmedDDPayments().subscribe((response: any) => {
      this.unconfirmedUsers = response;
    })
  }

  loadEvents(_id: string) {
    this.eventRegistrtationService.getUserEvents(_id).subscribe((response: any) => {
      this.events = response.msg;
      this.calculateAmount();
    })
  }

  loadWorkshops(_id: string) {
    this.eventRegistrtationService.getUserWorkshops(_id).subscribe((response: any) => {
      this.workshops = response.msg;
      this.calculateAmount();
    })
  }


  calculateAmount() {
    this.amount = 0;
    if (this.events.length != 0) {
      this.amount += 200
    }
    if (this.workshops.length != 0) {
      this.workshops.forEach((workshop: any) => {
        this.amount += workshop.event_id.amount
      })
    }
  }
}

