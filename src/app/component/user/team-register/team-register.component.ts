import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { ActivatedRoute } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-team-register',
  templateUrl: './team-register.component.html',
  styleUrls: ['./team-register.component.css']
})
export class TeamRegisterComponent implements OnInit {

  teamRegisterForm:FormGroup;
  Submitted:Boolean;
  event_id:String;
  constructor(private route: ActivatedRoute,private formbuilder: FormBuilder,private eventRegister:EventRegistrationService) { 
    this.route.params.subscribe(param => { this.event_id = param.id });
  }

  ngOnInit() {
    this.createForm();
  }

  get f() { return this.teamRegisterForm.controls; }
  createForm() {
    this.teamRegisterForm = this.formbuilder.group({
      _id: '',
      name: ['',Validators.required],
      email_id: ['',Validators.required]
    });
    this.Submitted = false;
  }
  
  onSubmit(form: NgForm) {
    this.Submitted = true;
    if(form.valid) {
      this.eventRegister.createEventWithTeamRegistration(JSON.parse(localStorage.getItem('user')).email_id,this.event_id,this.teamRegisterForm.get('name').value,"leader").subscribe((response: any) => {
        if ( response.error ) {
          M.toast({ html: response.msg , classes: 'roundeds danger'});
          this.createForm();
        } else {
          M.toast({ html: response.msg , classes: 'roundeds'});
          this.createForm();
        }
      });

      this.eventRegister.createEventWithTeamRegistration(this.teamRegisterForm.get('email_id').value,this.event_id,this.teamRegisterForm.get('name').value,"leader").subscribe((response: any) => {
        if ( response.error ) {
          M.toast({ html: response.msg , classes: 'roundeds danger'});
          this.createForm();
        } else {
          M.toast({ html: response.msg , classes: 'roundeds'});
          this.createForm();
        }
      });
    }
  }
}
