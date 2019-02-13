import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, NgForm } from '@angular/forms';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ParticipationstatusService } from 'src/app/services/participationstatus/participationstatus.service';
import { Location, DatePipe } from '@angular/common';
import { ExcelService } from 'src/app/services/excel.service';
import { QrScannerComponent } from 'angular2-qrscanner';
import { QrService } from 'src/app/services/qr/qr.service';
import { UserService } from 'src/app/services/user/user.service';
import { CertificateService } from 'src/app/services/certificate/certificate.service';


declare var M: any;

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.css'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})
export class EventParticipantsComponent implements OnInit {

  event_id: String;
  currentAttendance: String;
  event: any;
  isParticipantEntry = true;
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;

  constructor(private certificateService: CertificateService, private userService: UserService, private qrService: QrService, private datePipe: DatePipe, private participantStatusService: ParticipationstatusService, private excelService: ExcelService, private eventRegistration: EventRegistrationService, public authService: AuthService, private formBuilder: FormBuilder, private route: ActivatedRoute, private location: Location) {

  }

  participantStatuss: Array<any>
  participantForm: FormGroup;
  participants: Array<any>;
  Button: any;
  submitted: boolean;
  searchText: String;
  users: Array<any>;
  paidStatus: String = "";
  certificates: Array<any> = []
  ngOnInit() {
    this.route.params.subscribe(param => {
      this.event_id = param.id
    });
    this.getEventById(this.event_id);
    this.submitted = false;
    this.currentAttendance = '';
    this.createForm();
    this.getParticipants();
    this.getParticipantStatus();
    this.searchText = "";
    this.getUsers();
  }

  loadCertificates() {
    this.certificateService.loadCertificates(this.event_id).subscribe((res: any) => {
      this.certificates = res.msg
    })
  }

  filter() {
    let paid: Boolean;
    if (this.paidStatus == "true") {
      paid = true;
    }
    else {
      paid = false;
    }
    this.eventRegistration.getEvents(this.event_id).subscribe((response: any) => {
      this.participants = [];
      if (this.paidStatus != "") {
        for (let user of response) {
          if (paid == true) {
            if (user.status == "Paid") {
              this.participants.push(user);
            }
          }
          else {
            if (user.status != "Paid") {
              this.participants.push(user);
            }
          }
        }
      }
      else {
        this.participants = response;
      }
    });
  }

  reload() {
    this.getParticipants();
  }

  getUsers() {
    this.userService.getAllParticipants().subscribe((response: any) => {
      this.users = response;
    })
  }

  get f() { return this.participantForm.controls; }
  onSubmit(form: FormGroup) {
    this.submitted = true;
    if (form.valid) {
      this.eventRegistration.createEventRegistrationOffline(this.participantForm.get('selectedUserId').value, this.event_id, this.participantForm.get('participation').value).subscribe((response: any) => {
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
    } else {
      M.toast({ html: 'Please Check The Form', classes: 'roundeds' });
    }
  }

  openQR() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });
    this.qrScannerComponent.capturedQr.subscribe((result: string) => {
      if (this.isParticipantEntry) {
        this.qrService.markPresent(result, this.event_id).subscribe((res: any) => {
          if (res.error) {
            M.toast({ html: 'An Error Occured. Scan Again', classes: 'roundeds' });
          } else {
            M.toast({ html: res.msg, classes: 'roundeds' });
            this.reload()
          }
        })
      } else {
        this.certificateService.issueCertificate(result).subscribe((res: any) => {
          if (res.error) {
            M.toast({ html: 'An Error Occured. Scan Again', classes: 'roundeds' });
          } else {
            M.toast({ html: res.msg, classes: 'roundeds' });
            this.loadCertificates()
          }
        })
      }
    });
  }

  scanID() {
    this.isParticipantEntry = true;
    this.openQR();
  }

  scanIDforCertificate() {
    this.isParticipantEntry = false;
    this.openQR();
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
      selectedUserId: ['', Validators.required],
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
    var filename = this.participants[0].event_id.title + ' - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var reportArray: Array<any> = [];
    this.participants.forEach((ele: any) => {
      var reportData: any = [];
      reportData["Name"] = ele.user_id.name;
      reportData["College"] = ele.user_id.college_id.name;
      reportData["Degree"] = ele.user_id.degree_id.name;
      reportData["Department"] = ele.user_id.department_id.name;
      reportData["Year"] = ele.user_id.year_id.name;
      reportData["Mobile Number"] = ele.user_id.mobile_number;
      reportData["Gender"] = ele.user_id.gender;
      reportData["E Mail ID"] = ele.user_id.email_id;
      reportData["Registration Type"] = ele.registration_type;
      reportData["Payment Status"] = ele.status;
      reportArray.push(reportData)
    })
    this.excelService.exportAsExcelFile(reportArray, filename);
  }

  getEventById(event_id: String) {
    this.eventRegistration.getEventById(event_id).subscribe((response: any) => {
      this.event = response;
      console.log(this.event);
    });
  }

}