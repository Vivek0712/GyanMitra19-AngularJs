import { Component, OnInit } from '@angular/core';
import { AccomodationService } from 'src/app/services/accomodation/accomodation.service'
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';

declare var M: any;

//Check line:64 error

@Component({
  selector: 'app-user-accomodation',
  templateUrl: './user-accomodation.component.html',
  styleUrls: ['./user-accomodation.component.css']
})
export class UserAccomodationComponent implements OnInit {
  _id: string;
  accomodation: Array<any>;
  accomodationForm: FormGroup;
  imageForm: FormGroup;
  submitted: boolean;
  hasAccomodation: boolean;

  constructor(private accomodationService: AccomodationService, private formBuilder: FormBuilder) { }

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
      //formData.append('id', this.accomodation._id);
      //formData.append('id', this.accomodation._id);
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

}
