import { Component, OnInit } from '@angular/core';
import { AccomodationService } from 'src/app/services/accomodation/accomodation.service'
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { AppService } from 'src/app/services/app/app.service';
import { PaymentService } from 'src/app/services/payment/payment.service';

declare var M: any;

//Check line:64 error

@Component({
  selector: 'app-user-accomodation',
  templateUrl: './user-accomodation.component.html',
  styleUrls: ['./user-accomodation.component.css']
})
export class UserAccomodationComponent implements OnInit {
  _id: string;
  accomodation: any;
  accomodationForm: FormGroup;
  imageForm: FormGroup;
  submitted: boolean;
  hasAccomodation: boolean;
  txnId: string;
  hashString: string;
  totalAmount: number;
  user: any;
  constructor(private accomodationService: AccomodationService,
    public appService: AppService,
    private paymentService:PaymentService,private formBuilder: FormBuilder) {
      this.user = JSON.parse(localStorage.getItem('user'))
     }

  ngOnInit() {
    this._id = JSON.parse(localStorage.getItem('user')).id;
    this.submitted = false;
    this.hasAccomodation = false;
    this.getAccomodation();
    this.createForm();
  }

  onSubmit(values: any) {
    this.submitted = true;
    this.accomodationService.createAccomodation('GM' + this._id.substring(this._id.length - 7),'',values.acc_days, '', 'Not Paid', 'Not Confirmed', this._id, Number(Number(values.acc_days) * 100).toString()).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getAccomodation()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getAccomodation()
      }
    });
  }

  createForm() {
    this.submitted = false;
    this.accomodationForm = this.formBuilder.group({
      acc_days: ''
    });
  }

  getAccomodation() {
    this.accomodationService.getAccomodation(this._id).subscribe((response: any) => {
      if (response) {
        if(response.docs.length == 0){
          this.hasAccomodation = false
          this.accomodation = response.docs[0];
        }
        else{
          this.hasAccomodation = true
          this.accomodation = response.docs[0];
        }
      }
    });
  }

  processFile(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      formData.append('id', JSON.parse(localStorage.getItem('user')).id);
      this.accomodationService.uploadFile(formData).subscribe((response: any) => {
        if(response.error == true){
          M.toast({ html: response.msg, classes: 'roundeds danger' });
        }
        else{
          M.toast({ html: response.msg, classes: 'roundeds' });
        }
      })
    }
  }
  payOnline() {
    
    this.genTxnId(true);

    this.hashData(true);
    console.log("Pay " + this.txnId)

    console.log("HASH " + this.hashString)

  }
  genTxnId(value: Boolean) {
    if (value) {
      this.txnId = '';
      var d = new Date();
      this.txnId = JSON.parse(localStorage.getItem('user')).gmID +  this.reverseString(d.getTime().toString());
      this.txnId = this.txnId.substr(0, 25);
    }
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
        const tamount = 100 + (100* this.appService.getTransactionFee());
        var body = {
          key: this.appService.getKey(),
          salt: this.appService.getSalt(),
          amount: tamount,
          txnId: this.txnId,
          productInfo: this.appService.getProductInfo(),
          name: JSON.parse(localStorage.getItem('user')).name,
          email: JSON.parse(localStorage.getItem('user')).email_id,
          mobile_number: JSON.parse(localStorage.getItem('user')).mobile_number,
        }
        console.log("In Traxn HashData" + this.txnId);
        this.paymentService.genHash(body).subscribe((response: any) => {
          if (response.error) {
            this.hashString = response.hash;
          }
        });
      }
    }
  

}
