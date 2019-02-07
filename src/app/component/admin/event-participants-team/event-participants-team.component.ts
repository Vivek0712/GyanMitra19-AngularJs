import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { RegistrationService } from 'src/app/services/registration/registration.service';
import { UserService } from 'src/app/services/user/user.service';
declare var $: any;
declare var M: any;
@Component({
  selector: 'app-event-participants-team',
  templateUrl: './event-participants-team.component.html',
  styleUrls: ['./event-participants-team.component.css']
})
export class EventParticipantsTeamComponent implements OnInit {

  teamRegisterForm: FormGroup;
  Submitted: Boolean;
  event_id: String;
  participants: Array<any>;
  team_mates: Array<any>;
  event: any;
  Button: any;
  users: Array<any>;
  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationService, private formbuilder: FormBuilder, private eventRegister: EventRegistrationService, private userService: UserService) {
    this.route.params.subscribe(param => { this.event_id = param.id });
  }
  ngOnInit() {
    this.Button = 'Register Team';
    this.team_mates = [];
    this.createForm();
    this.getParticipants();
    this.getUsers();
  }
  get f() { return this.teamRegisterForm.controls; }
  createForm() {
    this.teamRegisterForm = this.formbuilder.group({
      _id: '',
      name: ['', Validators.required],
      leader_id: ['', Validators.required]
      //collegeMates:[this.college_mates]
    });
    this.Submitted = false;
  }

  onSubmit(form: FormGroup) {
    this.Button = 'Loading....';
    this.Submitted = true;
    var iCnt = 0;
    var data = $('#default-multiple').select2('data');
    var user_ids = [];
    $.each(data, function () {
      var user_id = $('#default-multiple').select2('data')[iCnt]['id'];
      user_ids.push(user_id);
      iCnt += 1;
    });
    if (form.valid) {
      this.route.params.subscribe(param => {
        this.eventRegister.getEventById(param.id).subscribe((res: any) => {
          if (res[0].max_members > user_ids.length) {
            this.eventRegister.createEventWithTeamRegistration(this.teamRegisterForm.get('leader_id').value, this.event_id, this.teamRegisterForm.get('name').value, "leader").subscribe((response: any) => {
              if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds danger' });
                this.createForm();
              } else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                this.createForm();
              }
            });
            let flag = 0;
            for (let user of user_ids) {
              this.eventRegister.createEventWithTeamRegistration(user, this.event_id, this.teamRegisterForm.get('name').value, "member").subscribe((response: any) => {
                if (response.error) {
                  M.toast({ html: response.msg, classes: 'roundeds danger' });
                  this.createForm();
                } else {
                  M.toast({ html: response.msg, classes: 'roundeds' });
                  this.createForm();
                  flag = flag + 1;
                }
              });
            }
          } else {
            M.toast({ html: "Maximum " + res[0].max_members + " are allowed.", classes: 'roundeds danger' });
            this.createForm();
          }
        });
      });
    }
  }
  getParticipants() {
    this.eventRegister.getGyanMates().subscribe((response: any) => {
      console.log(response);
      if (response.error) {
      }
      else {
        this.participants = response.msg;
        $(document).ready(function () {
          $('#default-multiple').select2({
            data: response.msg,
            multiple: true,
            placeholder: 'Add TeamMates',
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
  }

  getUsers() {
    this.userService.getAllParticipants().subscribe((response: any) => {
      this.users = response;
    })
  }

  getEventById(event_id: String) {
    this.eventRegister.getEventById(event_id).subscribe((response: any) => {
      this.event = response;
    });
  }


}
