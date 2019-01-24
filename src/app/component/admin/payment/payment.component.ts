import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { ExcelService } from 'src/app/services/excel.service';
import { Location, DatePipe } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [DatePipe]
})
export class PaymentComponent implements OnInit {

  payedUsers:Array<any>;
  click:Boolean = false;
  constructor(private payService: PaymentService, private datePipe: DatePipe, private excelService: ExcelService) { }

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
        console.log("HElli");
        console.log(this.payedUsers);
      }
      else {
          console.log("error");
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
        console.log("HElli");
        console.log(this.payedUsers);
      }
      else {
        console.log("error");
      }
    })
  }

  exportAsXLSX() {
    var filename = 'Online Payment - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var slNo = 1;
    var reportArray: Array<any> = [];
    this.payedUsers.forEach((ele: any) => {
      var reportData: any = [];
      reportData["Sl. No"] = slNo++
      reportData["Name"] = ele.user_id.name;
      reportData["Transaction ID"] = ele.transaction_id;
      reportData["Amount"] = ele.amount;
      reportData["Mobile Number"] = ele.user_id.mobile_number;
      reportData["E Mail ID"] = ele.user_id.email_id;
      reportArray.push(reportData)
    })
    this.excelService.exportAsExcelFile(reportArray, filename);
  }
}
