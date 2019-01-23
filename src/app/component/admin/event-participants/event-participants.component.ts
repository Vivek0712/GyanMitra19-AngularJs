import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, NgForm } from '@angular/forms';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ParticipationstatusService } from 'src/app/services/participationstatus/participationstatus.service';
import { Location } from '@angular/common';
import { ExcelService } from 'src/app/services/excel.service';

declare var M: any;

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.css']
})
export class EventParticipantsComponent implements OnInit {

  event_id: String;
  currentAttendance: String;


  constructor(private participantStatusService: ParticipationstatusService, private excelService: ExcelService, private eventRegistration: EventRegistrationService, public authService: AuthService, private formBuilder: FormBuilder, private route: ActivatedRoute, private location: Location) {
    this.route.params.subscribe(param => {
      this.event_id = param.id

    });
  }

  participantStatuss: Array<any>
  participantForm: FormGroup;
  participants: Array<any>;
  Button: any;
  submitted: boolean;
  searchText: String;


  ngOnInit() {
    this.submitted = false;
    this.currentAttendance = '';
    this.createForm();
    this.getParticipants();
    this.getParticipantStatus();
    this.searchText = "";


    var urlParams = [];
    window.location.search.replace("?", "").split("&").forEach(function (e, i) {
      var p = e.split("=");
      urlParams[p[0]] = p[1];
    });

    // We have all the params now -> you can access it by name
    console.log(urlParams["loaded"]);

    if (urlParams["loaded"]) { } else {

      let win = (window as any);
      win.location.search = '?loaded=1';
      //win.location.reload('?loaded=1');
    }

  }

  reload() {
    this.getParticipants();
  }

  get f() { return this.participantForm.controls; }
  onSubmit(form: FormGroup) {
    this.submitted = true;
    if (form.valid) {
      if (form.value._id === '') {
        //this.event_id, this.participantForm.get('email_id').value, this.participantForm.get('participation').value
        // this.eventRegistration.createEventRegistration(,this.event_id).subscribe((response: any) => {
        //   if (response.error) {
        //     M.toast({ html: response.msg, classes: 'roundeds' });
        //     this.getParticipants();
        //     this.createForm();
        //   } else {
        //     M.toast({ html: response.msg, classes: 'roundeds' });
        //     this.getParticipants();
        //     this.createForm();
        //   }
        // });
      }
    } else {
      M.toast({ html: 'Please Check The Form', classes: 'roundeds' });
    }
  }

  getParticipants() {
    this.eventRegistration.getEvents(this.event_id).subscribe((response: any) => {
      this.participants = response;
    });
  }

  createForm() {
    this.submitted = false;
    this.participantForm = this.formBuilder.group({
      _id: '',
      email_id: ['', Validators.required],
      participation: ['', Validators.required]
    });
    this.Button = 'Create';
  }

  deleteParticipant(id: string) {
    this.eventRegistration.cancelEventRegistration(id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getParticipants();
        this.createForm();
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getParticipants();
        this.createForm();
      }
    });
  }
  updateAttendance(id: string) {
    this.eventRegistration.updateAttendance(id, this.currentAttendance).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
      else {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
    });
  }

  getParticipantStatus() {
    this.participantStatusService.readParticipationStatus(0).subscribe((response: any) => {
      this.participantStatuss = response;
    });
  }

  exportAsXLSX() {
    var reportArray: Array<any> = [];
    this.participants.forEach((ele: any)=>{
       var reportData: any = [];
       reportData["Name"] = ele.user_id.name?ele.user_id.name:"";
       reportData["College"] = ele.college_id.name ? ele.college_id.name : ' ';
       reportData["Mobile Number"] = ele.user_id.mobile_number;
       reportData["Gender"] = ele.user_id.gender;
       reportData["E Mail ID"] = ele.user_id.email_id;
       reportData["Registration Type"] = ele.registration_type;
       reportData["Payment Status"] = ele.status;
       reportArray.push(reportData)
    })
    this.excelService.exportAsExcelFile(reportArray, 'Event Participants');
  }

}