import { Component, OnInit } from '@angular/core';
import { CollegeService } from 'src/app/services/college/college.service';
import { UserService } from 'src/app/services/user/user.service'
import { DegreeService } from 'src/app/services/degree/degree.service';
import { DepartmentService } from 'src/app/services/department/department.service';

declare var M: any;

export interface College {
  _id: String,
  name: String
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
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

  constructor(private collegeService:CollegeService, private userService: UserService,private degreeService: DegreeService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.currentPage=1;
    this.getParticipants(1);
    this.getColleges();
    this.selectedGender="Male";
    this.selectedParticipant = {
      name: '',
      college_id: '',
      department_id: '',
      degree_id: '',
      gender: '',
      mobile_number: '',
      email_id: '',
      activated: false,
      confirmed: false
    }
  }

  getSelectedDepartment(){
    this.departmentService.readDepartment(0).subscribe((response: any) => {
      let dept: Array<any> = response;
      dept = dept.filter((it)=>{
        return it._id == this.selectedParticipant.department_id;
      })
      this.selectedDepartment = dept[0].name;
    })
  }

  getSelectedDegree() {
    this.degreeService.readDegree(0).subscribe((response: any)=>{
      let degree: Array<any> = response;
      degree = degree.filter((it)=>{
        return it._id == this.selectedParticipant.degree_id;
      })
      this.selectedDegree = degree[0].name;
    })
  }

  getColleges(){
    this.collegeService.readCollege(0).subscribe((response: any)=>{
      this.colleges= response;
    })
  }

  getAllParticipants(){
    this.userService.getAllParticipants().subscribe((response: any) => {
      this.participants = response;
    });
  }

  reload(){
    this.searchText='';
    this.getParticipants(1);
  }

  loadFull(){
    this.getAllParticipants();
  }

  // filter() {
  //   this.loadAllParticipants().((response: any)=>{

  //   })
  // }

  confirmPayment(){
    this.userService.confirmPayment(this.selectedParticipant._id).subscribe((response: any)=>{
      M.toast({ html: response.msg, classes: 'roundeds' });
    })
  }

  moreInfo(_id:String){
    this.userService.getParticipant(_id).subscribe((response: any)=>{
      this.selectedParticipant = response;
      this.getSelectedDepartment();
      this.getSelectedDegree();
    })
  }


  getParticipants(page: any){
    this.userService.getParticpants(page).subscribe((response: any) => {
      if(response.docs.length == 0){
        this.currentPage -= 1;
      }
      else{
        this.participants = response.docs;
      }
    });
  }

  nextPage(){
    this.currentPage = this.currentPage + 1;
    this.getParticipants(this.currentPage);
  }
  
  previousPage() {
    if(this.currentPage == 1) {
    }
    else{
      this.currentPage = this.currentPage -1;
      this.getParticipants(this.currentPage);
    }
  }

}
