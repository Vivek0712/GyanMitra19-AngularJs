import { Component, OnInit } from '@angular/core';
import { CollegeService } from 'src/app/services/college/college.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { AccomodationService } from 'src/app/services/accomodation/accomodation.service';
import { AppService } from 'src/app/services/app/app.service';
import { ExcelService } from 'src/app/services/excel.service';
import { Location, DatePipe } from '@angular/common';

declare var M: any;

@Component({
  selector: 'app-admin-accomodation',
  templateUrl: './admin-accomodation.component.html',
  styleUrls: ['./admin-accomodation.component.css'],
  providers: [DatePipe]
})
export class AdminAccomodationComponent implements OnInit {
  colleges: any;
  departments: any;
  accomodations: any;
  selectedName: string;
  selectedTransactionID: string;
  ddImage: string;
  selectedID: string;
  paidStatus: String;
  constructor(private datePipe: DatePipe, public appService: AppService, private collegeService: CollegeService, private departmentService: DepartmentService, private accommodationService: AccomodationService, private excelService: ExcelService) { }
  selectedGender: String;

  ngOnInit() {
    this.loadAllAccomodations();
    this.selectedName = "";
    this.selectedTransactionID = "";
    this.ddImage = "";
    this.selectedID = "";
    this.selectedGender = "";
    this.paidStatus = ""
  }

  loadDD(id: string, tId: string, imgLoc: string) {
    this.selectedTransactionID = tId;
    this.accommodationService.confirmAccomodation(id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      }
    })
  }

  filter() {
    this.accommodationService.populateAccomodation().subscribe((response: any) => {
      this.accomodations = [];
      if (this.selectedGender != "" && this.paidStatus != "") {
        for (let user of response) {
          if (user.user_id.gender == this.selectedGender && user.acc_payment_status == this.paidStatus) {
            this.accomodations.push(user);
          }
        }
      }
      else if (this.selectedGender != "") {
        for (let user of response) {
          if (user.user_id.gender == this.selectedGender) {
            this.accomodations.push(user);
          }
        }
      }
      else if (this.paidStatus != "") {
        for (let user of response) {
          if (user.acc_payment_status == this.paidStatus) {
            this.accomodations.push(user);
          }
        }
      }
      else {
        this.accomodations = response;
      }
    })
  }

  deleteRequest(id: string) {

    this.accommodationService.deleteAccomodation(id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      }
    })
  }

  confirmAccomodation(id: string) {
    this.accommodationService.confirmAccomodation(id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      }
    })
  }

  refusePayment(id: string) {
    this.accommodationService.refusePayment(id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      }
    })
  }

  deproveAccomodation(id: string) {
    this.accommodationService.deproveAccomodation(id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      }
    })
  }

  approveAccomodation(id: string) {
    this.accommodationService.approveAccomodation(id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      }
    })
  }

  loadAllAccomodations() {
    this.accommodationService.populateAccomodation().subscribe((response) => {
      this.accomodations = response;
    })
  }

  loadDepartments() {
    this.departmentService.readDepartment(0).subscribe((response) => {
      this.departments = response;
    })
  }

  loadColleges() {
    this.collegeService.readCollege(0).subscribe((response) => {
      this.colleges = response;
    })
  }

  exportAsExcel() {
    var filename = 'All Accomodation - ' + this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    var slNo = 1;
    var reportArray: Array<any> = [];
    this.accomodations.forEach((entry) => {
      var reportData: any = [];
      reportData["Sl. No"] = slNo++
      reportData["Name"] = entry.user_id.name
      reportData["Gender"] = entry.user_id.gender
      reportData["College"] = entry.user_id.college_id.name
      reportData["Mobile Number"] = entry.user_id.mobile_number
      reportData["Email ID"] = entry.user_id.email_id
      reportData["Application Status"] = entry.acc_status
      reportData["Payment Status"] = entry.acc_payment_status
      reportArray.push(reportData)
    });
    this.excelService.exportAsExcelFile(reportArray, filename);
  }
}
