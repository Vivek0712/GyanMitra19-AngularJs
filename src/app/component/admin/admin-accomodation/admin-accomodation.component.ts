import { Component, OnInit } from '@angular/core';
import { CollegeService } from 'src/app/services/college/college.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { AccomodationService } from 'src/app/services/accomodation/accomodation.service';
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
  filteredAccomodations: any;
  selectedName: string;
  selectedDays: string;
  selectedCollege: string;
  selectedDepartment: string;
  selectedModeOfPayment: string;
  selectedTransactionID: string;
  ddImage: string;
  selectedID: string;
  constructor(private collegeService: CollegeService, private departmentService: DepartmentService, private accommodationService: AccomodationService) { }

  ngOnInit() {
    this.loadColleges();
    this.loadDepartments();
    this.loadAllAccomodations();
    this.selectedName = "";
    this.selectedCollege = "";
    this.selectedDays = "";
    this.selectedDepartment = "";
    this.selectedModeOfPayment = "";
    this.selectedTransactionID = "";
    this.ddImage = "";
    this.selectedID = "";
  }

  loadDD(id: string, tId: string, imgLoc: string) {
    this.selectedTransactionID = tId;
    this.selectedID = id;
    this.ddImage="http://localhost:3000/assests/images/accomodation/"+imgLoc;
  }

  filter() {
    this.filteredAccomodations = this.accomodations.filter((item) => {
      let name: string = item.user_id.name;
      return name.toLowerCase().includes(this.selectedName.toLowerCase()) && this.selectedCollege == item.user_id.college_id._id && this.selectedDays == item.acc_days && this.selectedDepartment == item.user_id.department_id._id && this.selectedModeOfPayment == item.acc_mode_of_payment
    });
  }

  deleteRequest(id: string){
    console.log(id);
    this.accommodationService.deleteAccomodation(id).subscribe((response: any)=>{
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      }
    })
  }

  confirmAccomodation(id: string){
    this.accommodationService.confirmAccomodation(id).subscribe((response:any )=>{
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      }
    })
  } 

  refusePayment(id: string){
    this.accommodationService.refusePayment(id).subscribe((response:any )=>{
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      }
    })
  }

  deproveAccomodation(id: string){
    this.accommodationService.deproveAccomodation(id).subscribe((response:any )=>{
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadAllAccomodations()
      }
    })
  }
  
  approveAccomodation(id: string){
    this.accommodationService.approveAccomodation(id).subscribe((response:any )=>{
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
      this.filteredAccomodations = response;
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
}
