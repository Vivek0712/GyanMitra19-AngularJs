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
  collegeUsers:Array<any>;
  event:any;
  eventRegisteredParticipants: Array<any>;
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

      if(this.eventRegisteredParticipants.length < this.event.max_members){
        M.toast({ html:"Maximum "+this.event.max_members+" are allowed." , classes: 'roundeds danger'});
        this.createForm();
      }
      else {
          for(let user of this.eventRegisteredParticipants){
            this.eventRegister.createEventWithTeamRegistration(this.eventRegisteredParticipants[user].email_id,this.event_id,this.teamRegisterForm.get('name').value,"member").subscribe((response: any) => {
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
    }

  getCollegeUsers(college:String){
    this.getEventById(this.event_id);
    this.eventRegister.getCollegeUsers(college).subscribe((response:any)=> {
      this.collegeUsers = response;
    })
  }

  getEventById(event_id: String) {
    this.eventRegister.getEventById(event_id).subscribe((response:any)=>{
      this.event = response;
    });
  }

}
