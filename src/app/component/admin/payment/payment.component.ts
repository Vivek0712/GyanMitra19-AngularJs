import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { ExcelService } from 'src/app/services/excel.service';
import { Location, DatePipe } from '@angular/common';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [DatePipe]
})
export class PaymentComponent implements OnInit {

  payedUsers: Array<any>;
  events: Array<any>;
  workshops: Array<any>;
  click: Boolean = false;
  searchText: String = "";
  constructor(private eventRegister: EventRegistrationService, private payService: PaymentService, private datePipe: DatePipe, private excelService: ExcelService) { }

  ngOnInit() {
  }

  getDDPayedUsers() {
    this.click = true;
    this.payService.getPaymentDetails().subscribe((response: any) => {
      if (response.success) {
        this.payedUsers = [];
        for (let user of response.msg) {
          if (user.mode_of_payment != "Online") {
            this.payedUsers.push(user);
          }
        }
      }
      else {
      }
    })
  }

  getOnlinePayedUsers() {
    this.click = true;
    this.payService.getPaymentDetails().subscribe((response: any) => {
      if (response.success) {
        this.payedUsers = [];
        for (let user of response.msg) {
          if (user.mode_of_payment == "Online") {
            // this.eventRegister.getRegisteredEvents(user.user_id._id, "Event").subscribe((res: any) => {
            //   console.log(res.doc);
            //   user.event = res.doc;
            // })
            // console.log(user.user_id._id);
            // console.log(user.event);
            this.payedUsers.push(user);
          }
        }
      }
      else {
      }
    })
  }

  getOfflinePayedUsers() {
    this.click = true;
    this.payService.getPaymentDetails().subscribe((response: any) => {
      if (response.success) {
        this.payedUsers = [];
        for (let user of response.msg) {
          if (user.mode_of_payment == "Offline") {
            // this.eventRegister.getRegisteredEvents(user.user_id._id, "Event").subscribe((res: any) => {
            //   console.log(res.doc);
            //   user.event = res.doc;
            // })
            // console.log(user.user_id._id);
            // console.log(user.event);
            this.payedUsers.push(user);
          }
        }
      }
      else {
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
