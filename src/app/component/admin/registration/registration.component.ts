import { Component, OnInit } from '@angular/core';
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


declare var M: any;

export interface College {
  _id: String,
  name: String
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DatePipe]
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
  edit: Boolean = false;
  userForm: FormGroup;
  submitted: Boolean = false;
  degrees: Array<any>;
  years: Array<any>;
  departments: Array<any>;
  registeredWorkshops: Array<any> = [];
  registeredEvents: Array<any> = [];

  constructor(private reportserviceService: ReportserviceService, private datePipe: DatePipe, private excelService: ExcelService, private yearService: YearService, private collegeService: CollegeService, private userService: UserService, private degreeService: DegreeService, private courseService: CourseService, private formBuilder: FormBuilder, private eventRegister: EventRegistrationService) { }

  ngOnInit() {
    this.currentPage = 1;
    this.getParticipants();
    this.getColleges();
    this.getDegrees();
    this.getYears();
    this.getDepartments();
    this.selectedGender = "";
    this.selectedCollegeId = "";
    this.searchText = "";
    this.viewDetails = false;
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

  confirmPayment() {
    this.userService.confirmPayment(this.selectedParticipant._id).subscribe((response: any) => {
      M.toast({ html: response.msg, classes: 'roundeds' });
    })
  }

  moreInfo(_id: string) {
    this.viewDetails = true;
    this.userService.getParticipant(_id).subscribe((response: any) => {
      this.selectedParticipant = response;
    })
    this.getRegisteredEvents(_id);
    this.getRegisteredWorkshops(_id);

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
      let paid:Boolean;
      if(this.paidStatus == "true") {
        paid = true;
      }
      else {
        paid = false;
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
      else if(this.paidStatus != "") {
        for (let user of response) {
          if (user.cart_paid == paid) {
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
      responseArray = res
      responseArray.forEach((event) => {
        var reportData: any = [];
        reportData["Sl. No"] = slNo++
        reportData["Name"] =  event.event[0].title;
        reportData["Count"] = event.count
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
      responseArray = res
      responseArray.forEach((event) => {
        var reportData: any = [];
        reportData["Sl. No"] = slNo++
        reportData["Name"] =  event.event[0].title;
        reportData["Count"] = event.count
        reportArray.push(reportData)
      })
      this.excelService.exportAsExcelFile(reportArray, filename);
    })
  }

  exportAsXLSX() {
    var filename = 'All Participants - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var slNo = 1;
    var reportArray: Array<any> = [];
    this.participants.forEach((ele: any) => {
      var reportData: any = [];
      reportData["Sl. No"] = slNo++
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
      reportArray.push(reportData)
    })
    this.excelService.exportAsExcelFile(reportArray, filename);
  }
}
