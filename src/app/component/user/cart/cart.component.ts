import { Component, OnInit } from '@angular/core';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { UserService } from 'src/app/services/user/user.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { AppService } from 'src/app/services/app/app.service';

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
  isCartConfirmed: boolean = false;
  paymentSent: boolean = false;
  constructor(private eventRegistrationService: EventRegistrationService,
    private appService:AppService,private paymentService: PaymentService, private userService: UserService) {
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
    this.userService.isCartConfirmed(this.user_id).subscribe((response: any) => {
      if (!response.error) {
        this.isCartConfirmed = response.isCartConfirmed;
      }
    })
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
        this.userService.isCartConfirmed(this.user_id).subscribe((response: any) => {
          if (!response.error) {
            this.isCartConfirmed = response.isCartConfirmed;
          }
        })
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
          if(this.workshops[0].status == 'Verifying Payment'){
            this.paymentSent = true;
          }
          else{
            this.paymentSent = false;
          }
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
  
  processFile(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      formData.append('id', this.user_id);
      this.userService.uploadCartDDImage(formData).subscribe((response: any) => {
        if(response.error == true){
          M.toast({ html: response.msg, classes: 'roundeds danger' });
        }
        else{
          M.toast({ html: response.msg, classes: 'roundeds' });
          this.getEvents();
          this.getWorkshops();
        }
      })
    }
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
  payOnline() {
    this.paymentService
  }
  hashData(amount: any) {
    var key = this.appService.getKey();
    var paymentSalt = this.appService.getSalt();
    var totalAmount = amount + (amount * this.appService.getTransactionFee());
    var productInfo = this.appService.getProductInfo();
    
  }
}