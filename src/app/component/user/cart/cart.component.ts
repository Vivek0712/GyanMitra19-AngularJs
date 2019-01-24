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
    //this.finished();

  }
  genTxnId(value: Boolean) {
    if (value) {
      this.txnId = '';
      var d = new Date();
      this.txnId = JSON.parse(localStorage.getItem('user')).gmID + '_' + this.reverseString(d.getTime().toString());
      this.txnId = this.txnId.substr(0, 25);

    }
    // console.log("In Gen TXN"+this.txnId);
    //return this.txnId;
  }
  reverseString(str: String) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
  }
  hashData(value: Boolean) {
    if (value) {
      const tamount = this.totalAmount + (this.totalAmount * this.appService.getTransactionFee());
      var body = {
        key: this.appService.getKey(),
        salt: this.appService.getSalt(),
        amount: this.totalAmount,
        txnId: this.txnId,
        productInfo: this.appService.getProductInfo(),
        name: JSON.parse(localStorage.getItem('user')).name,
        email: JSON.parse(localStorage.getItem('user')).email_id,
        mobile_number: JSON.parse(localStorage.getItem('user')).mobile_number,
      }
      this.paymentService.genHash(body).subscribe((response: any) => {
        if (response.error) {
          this.hashString = response.hash;
        }
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