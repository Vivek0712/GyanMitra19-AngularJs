import { Component, OnInit } from '@angular/core';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { UserService } from 'src/app/services/user/user.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { AppService } from 'src/app/services/app/app.service';
import { AuthService } from 'src/app/services/auth/auth.service';

declare var M: any;



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  workshops: Array<string> = [];
  events: Array<string> = [];
  user: any;
  totalAmount: number;
  public currentUserId: string;
  isCartConfirmed: Boolean = false;
  txnId: string;
  hashString: string;
  submitted: Boolean = false;
  amount: number;

  constructor(private eventRegistrationService: EventRegistrationService,
    private userService: UserService,
    private paymentService: PaymentService,
    public appService: AppService,
    private authService: AuthService) {
    const hash = this.hashData.bind(this);
    const transaction = this.genTxnId.bind(this);
    hash(false);
    transaction(false);

  }

  ngOnInit() {
    this.currentUserId = '';
    this.totalAmount = 0;
    this.user = (JSON.parse(localStorage.getItem('user')))
    if (this.user != null) {
      this.currentUserId = this.user.id;
      this.userService.refreshUser().subscribe((response) => {
        this.authService.refreshSession((response));
        this.user = (JSON.parse(localStorage.getItem('user')))
      })
    }
    const data = this.getUserWorkshops.bind(this);
    data(this.currentUserId);

    this.getUserWorkshops(this.user.id);
    this.getUserEvents(this.user.id);
    this.checkCartConfirmation();


  }

  checkCartConfirmation() {
    this.userService.refreshUser().subscribe((response: any) => {
      this.authService.refreshSession(response)
      this.user = (JSON.parse(localStorage.getItem('user')))
      this.isCartConfirmed = this.user.cart_confirmed
    })
  }

  getUserWorkshops(user_id: string) {
    this.eventRegistrationService.getUserWorkshops(user_id).subscribe((res: any) => {
      if (res) {
        this.workshops = res.msg;
        this.calculateAmount();
      }
    })
  }

  calculateAmount() {
    this.totalAmount = 0;
    if (this.events.length != 0) {
      this.totalAmount += 200
    }
    if (this.workshops.length != 0) {
      this.workshops.forEach((workshop: any) => {
        this.totalAmount += workshop.event_id.amount
      })
    }
    this.totalAmount = this.totalAmount + (this.totalAmount * this.appService.getTransactionFee());
  }

  removeRegistration(registration_id: string) {
    this.eventRegistrationService.cancelEventRegistration(registration_id).subscribe((response: any) => {

    })
  }

  getUserEvents(user_id: string) {
    this.eventRegistrationService.getUserEvents(user_id).subscribe((res: any) => {
      if (res) {
        this.events = res.msg;
        this.calculateAmount()
      }
    })
  }

  confirmDD() {
    this.userService.confirmDD(this.user.id).subscribe((response: any) => {
      if (response.error == true) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
      else {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
    })
  }

  confirmCart() {
    this.userService.confirmCart(this.user.id).subscribe((response: any) => {
      if (response.error == true) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
      else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.isCartConfirmed = true;
        this.getUserEvents(this.user.id);
        this.getUserWorkshops(this.user.id);
        this.calculateAmount();
        this.userService.isCartConfirmed(this.user.id).subscribe((response: any) => {
          if (!response.error) {
            this.isCartConfirmed = response.isCartConfirmed;
            this.userService.refreshUser().subscribe((response) => {
              this.authService.refreshSession((response));
              this.user = (JSON.parse(localStorage.getItem('user')))
            })
          }
        })
      }
    })
  }
  payOnline() {
    this.genTxnId(true);
    this.hashData(true);
  }
  genTxnId(value: Boolean) {
    if (value) {
      this.txnId = '';
      var d = new Date();
      this.txnId = JSON.parse(localStorage.getItem('user')).gmID + '_' + this.reverseString(d.getTime().toString());
      this.txnId = this.txnId.substr(0, 25);
    }
  }
  reverseString(str: String) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }
  hashData(value: Boolean) {
    if (value) {
      var body = {
        /* 
          Dont send salt,amount and key here because this is sent has json to the backend. 
          Json is visible in the browser.
          Salt is the unique identity given to us by payumoney.
        */
        txnId: this.txnId,
        productInfo: this.appService.getProductInfo(),
        name: JSON.parse(localStorage.getItem('user')).name,
        email: JSON.parse(localStorage.getItem('user')).email_id,
        mobile_number: JSON.parse(localStorage.getItem('user')).mobile_number,
      }
      this.paymentService.genHash(body).subscribe((response: any) => {
        this.hashString = response.hash;
      });
    }
  }

  finsish() {

  }
  cancelEventRegistration(_id: string) {
    this.eventRegistrationService.cancelEventRegistration(_id).subscribe((response: any) => {
      if (response.error == true) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
      else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getUserEvents(this.user.id);
        this.getUserWorkshops(this.user.id)
        this.calculateAmount();
      }
    })
  }
}