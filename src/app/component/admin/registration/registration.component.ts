import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { CollegeService } from 'src/app/services/college/college.service';
import { UserService } from 'src/app/services/user/user.service'
import { DegreeService } from 'src/app/services/degree/degree.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, NgForm } from '@angular/forms';
import { YearService } from 'src/app/services/year/year.service';
import { CourseService } from 'src/app/services/course/course.service';
import { ExcelService } from 'src/app/services/excel.service';
import { Location, DatePipe } from '@angular/common';
import { ReportserviceService } from 'src/app/services/report/reportservice.service';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { QrScannerComponent } from 'angular2-qrscanner';
import { QrService } from 'src/app/services/qr/qr.service';
import { EventService } from 'src/app/services/event/event.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { RoleUserService } from 'src/app/services/role_user/role-user.service';

declare var M: any;

export interface College {
  _id: String,
  name: String
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})


export class RegistrationComponent implements OnInit {
  currentPage: any;
  searchText: any;
  participants: Array<any>;
  colleges: Array<any>;
  selectedCollegeId: string;
  selectedDepartment: string;
  selectedDegree: string;
  selectedGender: string;
  selectedParticipant: any;
  viewDetails: Boolean;
  paidStatus: String = "";
  activated: String = "";
  edit: Boolean = false;
  userForm: FormGroup;
  submitted: Boolean = false;
  degrees: Array<any>;
  years: Array<any>;
  departments: Array<any>;
  registeredWorkshops: Array<any> = [];
  registeredEvents: Array<any> = [];
  events: Array<any>;
  workshops: Array<any>;
  selectedEventId: String = "";
  selectedWorkshopId: String;
  value: Boolean = false;
  selectedParticipantAmount: number = 0;
  invoiceStatus: Boolean = false;
  role: any;
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;
  constructor(private roleUserService: RoleUserService, private payService: PaymentService, private eventService: EventService, private qrService: QrService, private reportserviceService: ReportserviceService, private datePipe: DatePipe, private excelService: ExcelService, private yearService: YearService, private collegeService: CollegeService, private userService: UserService, private degreeService: DegreeService, private courseService: CourseService, private formBuilder: FormBuilder, private eventRegister: EventRegistrationService) { }

  ngOnInit() {
    this.currentPage = 1;
    this.getParticipants();
    this.getColleges();
    this.getDegrees();
    this.getYears();
    this.getDepartments();
    this.getEvents();
    this.getWorkshops();
    this.selectedGender = "";
    this.selectedCollegeId = "";
    this.searchText = "";
    this.viewDetails = false;
    this.checkForRole();
  }

  checkForRole() {
    this.roleUserService.readRoleUserById(JSON.parse(localStorage.getItem('user')).id).subscribe((response: any) => {
      if (response.success) {
        this.role = response.msg[0];
      }
    })
  }

  toggle() {
    if (this.value == true) {
      this.value = false;
      this.selectedParticipantAmount = this.selectedParticipantAmount - 200;
    }
    else {
      this.value = true;
      this.invoiceStatus = true;
      this.selectedParticipantAmount = this.selectedParticipantAmount + 200;
    }
  }

  calculateTotal(id: String) {
    this.payService.calculateTotalAmount(id).subscribe((response: any) => {
      this.selectedParticipantAmount = response.amount;
    })
  }

  registerWorkshop() {
    this.invoiceStatus = true;
    this.eventRegister.createEventRegistration(this.selectedParticipant._id, this.selectedWorkshopId).subscribe((response: any) => {
      M.toast({ html: response.msg, classes: 'roundeds' });
      this.calculateTotal(this.selectedParticipant._id);
      this.getRegisteredWorkshops(this.selectedParticipant._id);
    })
    this.calculateTotal(this.selectedParticipant._id);
    this.getRegisteredWorkshops(this.selectedParticipant._id);
  }

  registerEvent() {
    this.invoiceStatus = true;
    this.eventRegister.createEventRegistration(this.selectedParticipant._id, this.selectedEventId).subscribe((response: any) => {
      M.toast({ html: response.msg, classes: 'roundeds' });
      this.calculateTotal(this.selectedParticipant._id);
      this.getRegisteredEvents(this.selectedParticipant._id);
    })
    this.calculateTotal(this.selectedParticipant._id);
    this.getRegisteredEvents(this.selectedParticipant._id);
  }

  deleteEventRegistration(id: String) {
    this.eventRegister.cancelEventRegistration(id).subscribe((response: any) => {
      this.getRegisteredEvents(this.selectedParticipant._id);
      this.getRegisteredWorkshops(this.selectedParticipant._id);
      this.calculateTotal(this.selectedParticipant._id);
      M.toast({ html: response.msg, classes: 'roundeds' });
    })
  }

  getEvents() {
    this.eventService.readWithEventCategory("Event", 0).subscribe((response: any) => {
      this.events = response;
      console.log(this.events);
    })
  }

  getWorkshops() {
    this.eventService.readWithEventCategory("Workshop", 0).subscribe((response: any) => {
      this.workshops = response;
    })
  }

  scanQR(_id: string) {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
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
      this.qrService.createMap(result, _id).subscribe((res: any) => {
        if (res.error) {
          M.toast({ html: 'An Error Occured. Scan Again', classes: 'roundeds' });
        } else {
          M.toast({ html: res.msg, classes: 'roundeds' });
        }
      })
    });
  }

  getRegisteredWorkshops(id: string) {
    this.eventRegister.getRegisteredEvents(id, "Workshop").subscribe((response: any) => {
      this.registeredWorkshops = response.doc;
    })
  }

  getRegisteredEvents(id: string) {
    this.eventRegister.getRegisteredEvents(id, "Event").subscribe((response: any) => {
      this.registeredEvents = response.doc;
    })
  }

  getYears() {
    this.yearService.readYear(0).subscribe((response: any) => {
      this.years = response;
    });
  }

  getDepartments() {
    this.courseService.readCourse(0).subscribe((response: any) => {
      this.departments = response;
    });
  }
  getDegrees() {
    this.degreeService.readDegree(0).subscribe((response: any) => {
      this.degrees = response;
    });
  }

  createForm() {
    this.submitted = false;
    this.userForm = this.formBuilder.group({
      _id: '',
      name: ['', Validators.required],
      email_id: ['', Validators.required],
      mobile_number: ['', Validators.required],
      college_id: ['', Validators.required],
      year_id: ['', Validators.required],
      degree_id: ['', Validators.required],
      department_id: ['', Validators.required]
    });
  }

  editClick() {
    if (this.edit == true) {
      this.edit = false;
    }
    else {
      this.edit = true;
      this.createForm();
      this.userForm.setValue({
        _id: this.selectedParticipant._id,
        name: this.selectedParticipant.name,
        email_id: this.selectedParticipant.email_id,
        mobile_number: this.selectedParticipant.mobile_number,
        college_id: this.selectedParticipant.college_id,
        year_id: this.selectedParticipant.year_id,
        degree_id: this.selectedParticipant.degree_id,
        department_id: this.selectedParticipant.department_id
      })
    }
  }

  // getSelectedDepartment() {
  //   this.departmentService.readDepartment(0).subscribe((response: any) => {
  //     let dept: Array<any> = response;
  //     dept = dept.filter((it) => {
  //       return it._id == this.selectedParticipant.department_id;
  //     })
  //     this.selectedDepartment = dept[0].name;
  //   })
  // }

  // getSelectedDegree() {
  //   this.degreeService.readDegree(0).subscribe((response: any) => {
  //     let degree: Array<any> = response;
  //     degree = degree.filter((it) => {
  //       return it._id == this.selectedParticipant.degree_id;
  //     })
  //     this.selectedDegree = degree[0].name;
  //   })
  // }

  getColleges() {
    this.collegeService.readCollege(0).subscribe((response: any) => {
      this.colleges = response;
    })
  }

  getAllParticipants() {
    this.userService.getAllParticipants().subscribe((response: any) => {
      this.participants = response;
    });
  }

  reload() {
    this.searchText = '';
    this.getParticipants();
  }

  loadFull() {
    this.getAllParticipants();
  }

  loadDayCount() {
    var filename = 'Event Count - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var reportArray: Array<any> = [];
    var responseArray = []
    this.reportserviceService.getDayCount().subscribe((res: any) => {
      var resp = {}
      resp = res
      var responseArray = []
      responseArray = Object.entries(resp)
      var onlyEvents = responseArray.filter((doc) => {
        return doc[1]["Event"] == true && doc[1]["Workshop"] == false
      })
      var onlyWorkshops = responseArray.filter((doc) => {
        return doc[1]["Event"] == false && doc[1]["Workshop"] == true
      })
      var bothEventsAndWorkshops = responseArray.filter((doc) => {
        return doc[1]["Event"] == true && doc[1]["Workshop"] == true
      })
      var paidOnlyEvents = onlyEvents.filter((doc) => {
        return doc[1]["Paid"]
      }).length
      var notPaidOnlyEvents = onlyEvents.filter((doc) => {
        return !doc[1]["Paid"]
      }).length
      var paidOnlyWoprkshops = onlyWorkshops.filter((doc) => {
        return doc[1]["Paid"]
      }).length
      var notPaidOnlyWorkshops = onlyWorkshops.filter((doc) => {
        return !doc[1]["Paid"]
      }).length
      var paidAll = bothEventsAndWorkshops.filter((doc) => {
        return doc[1]["Paid"]
      }).length
      var notPaidAll = bothEventsAndWorkshops.filter((doc) => {
        return !doc[1]["Paid"]
      }).length
      console.log(notPaidOnlyEvents)
      console.log(notPaidOnlyWorkshops)
      var reportData = []
      reportData["Category"] = "Event Only"
      reportData["Paid"] = paidOnlyEvents
      reportData["Not Paid"] = notPaidOnlyEvents
      reportArray.push(reportData)
      var reportData2 = []
      reportData2["Category"] = "Workshop Only"
      reportData2["Paid"] = paidOnlyWoprkshops
      reportData2["Not Paid"] = notPaidOnlyWorkshops
      reportArray.push(reportData2)
      var reportData3 = []
      reportData3["Category"] = "Both Events and Workshops"
      reportData3["Paid"] = paidAll
      reportData3["Not Paid"] = notPaidAll
      reportArray.push(reportData3)
      this.excelService.exportAsExcelFile(reportArray, filename);
    })
  }

  exportCollegeWiseEventCount() {
    var filename = 'College wise Event Count - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var reportArray: Array<any> = [];
    var responseArray = []
    this.reportserviceService.getCollegeCountForEvents().subscribe((res: any) => {
      var resp = {}
      resp = res
      var responseArray = []
      responseArray = Object.entries(resp);
      console.log(responseArray)
      var slNo = 1;
      responseArray.forEach((doc) => {
        var reportData = []
        reportData["Sl. No"] = slNo++;
        reportData["College Name"] = doc[0];
        reportData["Paid"] = doc[1]["Paid"];
        reportData["Not Paid"] = doc[1]["Not Paid"]
        reportData["Total"] = doc[1]["Total"]
        reportArray.push(reportData)
      })
      this.excelService.exportAsExcelFile(reportArray, filename);
    })
  }

  exportCollegeWiseWorkshopCount() {
    var filename = 'College wise Event Count - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var reportArray: Array<any> = [];
    var responseArray = []
    this.reportserviceService.getCollegeCountForWorkshop().subscribe((res: any) => {
      var resp = {}
      resp = res
      var responseArray = []
      responseArray = Object.entries(resp);
      console.log(responseArray)
      var slNo = 1;
      responseArray.forEach((doc) => {
        var reportData = []
        reportData["Sl. No"] = slNo++;
        reportData["College Name"] = doc[0];
        reportData["Paid"] = doc[1]["Paid"];
        reportData["Not Paid"] = doc[1]["Not Paid"]
        reportData["Total"] = doc[1]["Total"]
        reportArray.push(reportData)
      })
      this.excelService.exportAsExcelFile(reportArray, filename);
    })
  }

  confirmPayment(event_id: String) {
    this.userService.confirmPaymentOffline(this.selectedParticipant._id, event_id).subscribe((response: any) => {
      M.toast({ html: response.msg, classes: 'roundeds' });
      this.getRegisteredEvents(this.selectedParticipant._id);
      this.getRegisteredWorkshops(this.selectedParticipant._id);
    })
    this.getRegisteredEvents(this.selectedParticipant._id);
    this.getRegisteredWorkshops(this.selectedParticipant._id);
  }

  moreInfo(_id: string) {
    this.viewDetails = true;
    this.userService.getParticipant(_id).subscribe((response: any) => {
      this.selectedParticipant = response;
      if (this.selectedParticipant.cart_paid) {
        this.invoiceStatus = true;
      }
      else {
        this.invoiceStatus = false;
      }
    })
    this.getRegisteredEvents(_id);
    this.getRegisteredWorkshops(_id);
    this.selectedParticipantAmount = 0;
    this.calculateTotal(_id);
  }

  viewed() {
    this.viewDetails = false;
    this.selectedParticipant = {};
    this.edit = false;
  }


  getParticipants() {
    this.userService.getAllParticipants().subscribe((response: any) => {
      this.participants = response;
    });
  }

  // nextPage() {
  //   this.currentPage = this.currentPage + 1;
  //   this.getParticipants(this.currentPage);
  // }

  // previousPage() {
  //   if (this.currentPage == 1) {
  //   }
  //   else {
  //     this.currentPage = this.currentPage - 1;
  //     this.getParticipants(this.currentPage);
  //   }
  // }

  deleteParticipant(id: string) {
    this.userService.deleteUser(id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getParticipants();
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getParticipants();
      }
    });
  }

  filter() {
    this.userService.getAllParticipants().subscribe((response: any) => {
      this.participants = [];
      let paid: Boolean;
      if (this.paidStatus == "true") {
        paid = true;
      }
      else {
        paid = false;
      }

      let act: Boolean;
      if (this.activated == "true") {
        act = true;
      }
      else {
        act = false;
      }
      if (this.selectedGender != "" && this.selectedCollegeId != "" && this.paidStatus != "") {
        for (let user of response) {
          if (user.gender == this.selectedGender && user.college_id._id == this.selectedCollegeId && user.cart_paid == paid) {
            this.participants.push(user);
          }
        }
      }
      else if (this.selectedCollegeId != "" && this.paidStatus != "") {
        for (let user of response) {
          if (user.college_id._id == this.selectedCollegeId && user.cart_paid == paid) {
            this.participants.push(user);
          }
        }
      }
      else if (this.selectedGender != "" && this.paidStatus != "") {
        for (let user of response) {
          if (user.gender == this.selectedGender && user.cart_paid == paid) {
            this.participants.push(user);
          }
        }
      }
      else if (this.selectedGender != "" && this.selectedCollegeId != "") {
        for (let user of response) {
          if (user.gender == this.selectedGender && user.college_id._id == this.selectedCollegeId) {
            this.participants.push(user);
          }
        }
      }
      else if (this.selectedGender != "") {
        for (let user of response) {
          if (user.gender == this.selectedGender) {
            this.participants.push(user);
          }
        }
      }
      else if (this.selectedCollegeId != "") {
        for (let user of response) {
          if (user.college_id._id == this.selectedCollegeId) {
            this.participants.push(user);
          }
        }
      }
      else if (this.paidStatus != "") {
        for (let user of response) {
          if (user.cart_paid == paid) {
            this.participants.push(user);
          }
        }
      }
      else if (this.activated != "") {
        for (let user of response) {
          if (user.activated == act) {
            this.participants.push(user);
          }
        }
      }
      else {
        this.participants = response;
      }
    });
  }

  updateUser() {
    this.userService.updateUser(this.userForm.value).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.edit = false;
      }
      else {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
    });
  }

  exportAsXLSXwithEventCount() {
    var filename = 'Event Count - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var slNo = 1;
    var reportArray: Array<any> = [];
    var responseArray = []
    this.reportserviceService.getEventCount().subscribe((res: any) => {
      var resp = {}
      resp = res
      var responseArray = []
      responseArray = Object.entries(resp)
      responseArray.forEach((entry) => {
        var reportData: any = [];
        reportData["Sl. No"] = slNo++
        reportData["Name"] = entry[0]
        reportData["Not Paid"] = entry[1]["Not Paid"]
        reportData["Paid"] = entry[1]["Paid"]
        reportArray.push(reportData)
      })
      this.excelService.exportAsExcelFile(reportArray, filename);
    })
  }
  exportAsXLSXwithWorkshopCount() {
    var filename = 'Workshop Count - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var slNo = 1;
    var reportArray: Array<any> = [];
    var responseArray = []
    this.reportserviceService.getWorkshopCount().subscribe((res: any) => {
      var resp = {}
      resp = res
      var responseArray = []
      responseArray = Object.entries(resp)
      responseArray.forEach((entry) => {
        var reportData: any = [];
        reportData["Sl. No"] = slNo++
        reportData["Name"] = entry[0]
        reportData["Not Paid"] = entry[1]["Not Paid"]
        reportData["Paid"] = entry[1]["Paid"]
        reportArray.push(reportData)
      })
      this.excelService.exportAsExcelFile(reportArray, filename);
    })
  }
  exportAsXLSXforWorkshops() {
    var filename = 'Registrations for Workshops - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var slNo = 1;
    var reportArray: Array<any> = [];
    this.reportserviceService.getWorkshopRegistrations().subscribe((response: any) => {
      var reportArray: Array<any> = [];
      var responseArray: Array<any> = response.msg;
      responseArray.forEach((ele: any) => {
        var reportData: any = [];
        reportData["Sl. No"] = slNo++
        reportData["Name"] = ele.user_id.name;
        reportData["College"] = ele.user_id.college_id.name;
        reportData["Degree"] = ele.user_id.degree_id.name;
        reportData["Department"] = ele.user_id.department_id.name;
        reportData["Year"] = ele.user_id.year_id.name;
        reportData["Mobile Number"] = ele.user_id.mobile_number;
        reportData["Gender"] = ele.user_id.gender;
        reportData["E Mail ID"] = ele.user_id.email_id;
        if (ele.user_id.cart_confirmed) {
          reportData["Cart Confirmed"] = "Yes"
        } else {
          reportData["Cart Confirmed"] = "No"
        }
        if (ele.user_id.cart_paid) {
          reportData["Payment Status"] = "Yes"
        } else {
          reportData["Payment Status"] = "No"
        }
        reportData["Registered In"] = ele.event_id.title
        reportArray.push(reportData)
      })
      this.excelService.exportAsExcelFile(reportArray, filename);
    })
  }

  exportAsXLSXforWorkshopsAttendance() {
    var filename = 'Attendance for Workshops - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var slNo = 1;
    var reportArray: Array<any> = [];
    this.reportserviceService.getWorkshopRegistrations().subscribe((response: any) => {
      var reportArray: Array<any> = [];
      var responseArray: Array<any> = response.msg;
      responseArray.forEach((ele: any) => {
        var reportData: any = [];
        reportData["Sl. No"] = " "
        reportData["Name"] = ele.user_id.name;
        reportData["College"] = ele.user_id.college_id.name;
        reportData["Degree"] = ele.user_id.degree_id.name;
        reportData["Department"] = ele.user_id.department_id.name;
        reportData["Year"] = ele.user_id.year_id.name;
        reportData["Mobile Number"] = ele.user_id.mobile_number;
        reportData["Gender"] = ele.user_id.gender;
        if (ele.user_id.cart_paid) {
          reportData["Payment Status"] = "Paid"
        } else {
          reportData["Payment Status"] = "Not Paid"
        }
        reportData["Registered In"] = ele.event_id.title
        reportData["Signature"] = " "
        reportArray.push(reportData)
      })
      reportArray.sort((a, b) => {
        return a["Name"].localeCompare(b["Name"])
      })

      reportArray.sort((a, b) => {
        return a["College"].localeCompare(b["College"])
      })
      slNo = 1;
      reportArray.forEach((doc) => {
        doc["Sl. No"] = slNo++;
      })
      this.excelService.exportAsExcelFile(reportArray, filename);
    })
  }

  exportAsXLSX() {
    var filename = 'All Registrations - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var slNo = 1;
    var reportArray: Array<any> = [];
    this.participants.forEach((ele: any) => {
      var reportData: any = [];
      reportData["Sl. No"] = slNo++;
      reportData["Name"] = ele.name;
      reportData["College"] = ele.college_id.name;
      reportData["Degree"] = ele.degree_id.name;
      reportData["Department"] = ele.department_id.name;
      reportData["Year"] = ele.year_id.name;
      reportData["Mobile Number"] = ele.mobile_number;
      reportData["Gender"] = ele.gender;
      reportData["E Mail ID"] = ele.email_id;
      if (ele.cart_confirmed) {
        reportData["Cart Confirmed"] = "Yes"
      } else {
        reportData["Cart Confirmed"] = "No"
      }
      if (ele.cart_paid) {
        reportData["Payment Status"] = "Yes"
      } else {
        reportData["Payment Status"] = "No"
      }
      //reportData["Registered In"] = ele.event_id.title
      reportArray.push(reportData);
    })
    this.excelService.exportAsExcelFile(reportArray, filename);
  }

  exportAsXLSXforEvents() {
    var filename = 'Registrations for Events - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var slNo = 1;
    this.reportserviceService.getEventRegistrations().subscribe((response: any) => {
      var reportArray: Array<any> = [];
      var responseArray: Array<any> = response.msg;
      responseArray.forEach((ele: any) => {
        var reportData: any = [];
        reportData["Sl. No"] = slNo++
        reportData["Name"] = ele.user_id.name;
        reportData["College"] = ele.user_id.college_id.name;
        reportData["Degree"] = ele.user_id.degree_id.name;
        reportData["Department"] = ele.user_id.department_id.name;
        reportData["Year"] = ele.user_id.year_id.name;
        reportData["Mobile Number"] = ele.user_id.mobile_number;
        reportData["Gender"] = ele.user_id.gender;
        reportData["E Mail ID"] = ele.user_id.email_id;
        if (ele.user_id.cart_confirmed) {
          reportData["Cart Confirmed"] = "Yes"
        } else {
          reportData["Cart Confirmed"] = "No"
        }
        if (ele.user_id.cart_paid) {
          reportData["Payment Status"] = "Yes"
        } else {
          reportData["Payment Status"] = "No"
        }
        reportArray.push(reportData)
      })
      this.excelService.exportAsExcelFile(reportArray, filename);
    })
  }

  exportAsXLSXforEventsAttendance() {
    var filename = 'Attendance for Events - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var slNo = 1;
    this.reportserviceService.getEventRegistrations().subscribe((response: any) => {
      var reportArray: Array<any> = [];
      var responseArray: Array<any> = response.msg;
      responseArray.forEach((ele: any) => {
        var reportData: any = [];
        reportData["Sl. No"] = " "
        reportData["Name"] = ele.user_id.name;
        reportData["College"] = ele.user_id.college_id.name;
        reportData["Degree"] = ele.user_id.degree_id.name;
        reportData["Department"] = ele.user_id.department_id.name;
        reportData["Year"] = ele.user_id.year_id.name;
        reportData["Email_id"] = ele.user_id.email_id;
        reportData["Mobile Number"] = ele.user_id.mobile_number;
        reportData["Gender"] = ele.user_id.gender;
        if (ele.user_id.cart_paid) {
          reportData["Payment Status"] = "Paid"
        } else {
          reportData["Payment Status"] = "Not Paid"
        }
        reportData["Signature"] = " "
        reportArray.push(reportData)
      })
      reportArray.sort((a, b) => {
        return a["Name"].localeCompare(b["Name"])
      })

      reportArray.sort((a, b) => {
        return a["College"].localeCompare(b["College"])
      })
      slNo = 1;
      reportArray.forEach((doc) => {
        doc["Sl. No"] = slNo++;
      })
      this.excelService.exportAsExcelFile(reportArray, filename);
    })
  }
}
