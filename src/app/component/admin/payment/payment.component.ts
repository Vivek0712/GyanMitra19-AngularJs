import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payedUsers:Array<any>;
  click:Boolean = false;
  constructor(private payService: PaymentService) { }

  ngOnInit() {
  }

  getDDPayedUsers(){
    this.click = true;
    this.payService.getPaymentDetails().subscribe((response:any)=>{
      if(response.success){
        this.payedUsers = [];
        for(let user of response.msg){
          if(user.mode_of_payment != "Online"){
            this.payedUsers.push(user);
          }
        }
      }
    })
  }

  getOnlinePayedUsers(){
    this.click = true;
    this.payService.getPaymentDetails().subscribe((response:any)=>{
      if(response.success){
        this.payedUsers = [];
        for(let user of response.msg){
          if(user.mode_of_payment == "Online"){
            this.payedUsers.push(user);
          }
        }
      }
    })
  }


}
