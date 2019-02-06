import { Component, OnInit } from '@angular/core';
import { CollegeService } from 'src/app/services/college/college.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { AccomodationService } from 'src/app/services/accomodation/accomodation.service';
import { AppService } from 'src/app/services/app/app.service';
declare var M: any;

@Component({
  selector: 'app-admin-accomodation',
  templateUrl: './admin-accomodation.component.html',
  styleUrls: ['./admin-accomodation.component.css']
})
export class AdminAccomodationComponent implements OnInit {
  colleges: any;
  departments: any;
  accomodations: any;
  selectedName: string;
  selectedTransactionID: string;
  ddImage: string;
  selectedID: string;
  selectedGender: String;
  constructor(public appService: AppService, private collegeService: CollegeService, private departmentService: DepartmentService, private accommodationService: AccomodationService) { }

  ngOnInit() {
    this.loadAllAccomodations();
    this.selectedName = "";
    this.selectedTransactionID = "";
    this.ddImage = "";
    this.selectedID = "";
    this.selectedGender = "";
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
      if (this.selectedGender != "") {
        for (let user of response) {
          if (user.user_id.gender == this.selectedGender) {
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
}
