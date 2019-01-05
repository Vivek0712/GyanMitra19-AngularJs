import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, NgForm } from '@angular/forms';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration/registration.service';
import { Response } from '@angular/http';
declare var M: any;
declare var $: any;
@Component({
  selector: 'app-team-register',
  templateUrl: './team-register.component.html',
  styleUrls: ['./team-register.component.css']
})
export class TeamRegisterComponent implements OnInit {

  teamRegisterForm: FormGroup;
  Submitted: Boolean;
  event_id: String;
  college_mates: Array<any>;
  team_mates: Array<any>;
  constructor(private route: ActivatedRoute, private registrationService:RegistrationService,private formbuilder: FormBuilder, private eventRegister: EventRegistrationService) {
    this.route.params.subscribe(param => { this.event_id = param.id });
  }

  ngOnInit() {
    this.team_mates = [];
    this.createForm();
    this.getCollegeMates();
  }
  get f() { return this.teamRegisterForm.controls; }
  createForm() {
    this.teamRegisterForm = this.formbuilder.group({
      _id: '',
      name: ['', Validators.required]
      //collegeMates:[this.college_mates]
    });
    this.Submitted = false;
  }

  onSubmit(form: FormGroup) {
    this.Submitted = true;
    var iCnt = 0;
    var data = $('#default-multiple').select2('data');
    var user_ids=[];
    $.each(data, function () {
     
      var user_id = $('#default-multiple').select2('data')[iCnt]['id'];
      user_ids.push(user_id);
      iCnt += 1;
    });
    console.log(user_ids);
    /*if (form.valid) {
      this.eventRegister.createEventWithTeamRegistration(JSON.parse(localStorage.getItem('user')).email_id, this.event_id, this.teamRegisterForm.get('name').value, "leader").subscribe((response: any) => {
        if (response.error) {
          M.toast({ html: response.msg, classes: 'roundeds danger' });
          this.createForm();
        } else {
          M.toast({ html: response.msg, classes: 'roundeds' });
          this.createForm();
        }
      });

      this.eventRegister.createEventForTeamMatesRegistration(this.team_mates, this.event_id).subscribe((response: any) => {
        if (response.error) {
          console.log(response);
          M.toast({ html: response.msg, classes: 'roundeds danger' });
          this.createForm();
        } else {
          M.toast({ html: response.msg, classes: 'roundeds' });
          this.createForm();
        }
      });
    }*/
  }
  getCollegeMates() {
    //console.log(JSON.parse(localStorage.getItem('user')).id);
    this.eventRegister.getCollegeMates(this.event_id, JSON.parse(localStorage.getItem('user')).id).subscribe((response: any) => {
      if (response.error) {
        console.log(response.error)
      }
      else {
        this.college_mates = response.msg;
        $(document).ready(function () {
          $('#default-multiple').select2({
            data: response.msg,
            multiple: true,
            placeholder: 'Add TeamMates',
            width: 'resolve'
          });
        });
      }
    });
  }
  getEmailId(value) {
    if (this.team_mates.includes(value)) {
      this.team_mates.splice(this.team_mates.indexOf(value), 1)
    }
    else {
      this.team_mates.push(value);
    }
    console.log(this.team_mates);
  }
}
