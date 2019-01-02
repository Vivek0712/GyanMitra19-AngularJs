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

  constructor(private accomodationService: AccomodationService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this._id = JSON.parse(localStorage.getItem('user')).id;
    this.submitted = false;
    this.getAccomodation();
    this.createForm();
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    const data = form.value;
    this.accomodationService.createAccomodation('GM' + this._id.substring(this._id.length - 7), data.acc_mode_of_payment, data.acc_days, '', 'Not Paid', 'Not Confirmed', this._id, Number(data.acc_days * 200).toString()).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.createForm();
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.createForm();
      }
    });
  }

  createForm() {
    this.submitted = false;
    this.accomodationForm = this.formBuilder.group({
      acc_mode_of_payment: '',
      acc_days: ''
    });
  }

  getAccomodation() {
    this.accomodationService.getAccomodation(this._id).subscribe((response: any) => {
      if (response) {
        this.accomodation = response.docs[0];
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
      this.accomodationService.uploadFile(formData).subscribe((response: any) => {
        if(response.error == true){
          M.toast({ html: response.msg, classes: 'roundeds danger' });
        }
        else{
          M.toast({ html: response.msg, classes: 'roundeds danger' });

        }
      })
    }
  }

}
