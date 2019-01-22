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
  viewDetails: Boolean;

  constructor(private collegeService: CollegeService, private userService: UserService, private degreeService: DegreeService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.currentPage = 1;
    this.getParticipants(1);
    this.getColleges();
    this.selectedGender = "";
    this.selectedCollegeId = "";
    this.searchText = "";
    this.viewDetails = false;
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
    this.getParticipants(1);
  }

  loadFull() {
    this.getAllParticipants();
  }

  // filter() {
  //   this.loadAllParticipants().((response: any)=>{

  //   })
  // }

  confirmPayment() {
    this.userService.confirmPayment(this.selectedParticipant._id).subscribe((response: any) => {
      M.toast({ html: response.msg, classes: 'roundeds' });
    })
  }

  moreInfo(_id: String) {
    this.viewDetails = true;
    this.userService.getParticipant(_id).subscribe((response: any) => {
      this.selectedParticipant = response;
      console.log(this.selectedParticipant);
    })
  }

  viewed(){
    this.viewDetails = false;
	this.selectedParticipant = {};
  }  


  getParticipants(page: any) {
    this.userService.getParticpants(page).subscribe((response: any) => {
      if (response.docs.length == 0) {
        this.currentPage -= 1;
        this.participants = []
      }
      else {
        this.participants = []
        this.participants = response.docs;
      }
    });
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.getParticipants(this.currentPage);
  }

  previousPage() {
    if (this.currentPage == 1) {
    }
    else {
      this.currentPage = this.currentPage - 1;
      this.getParticipants(this.currentPage);
    }
  }
  deleteParticipant(id: string) {
    this.userService.deleteUser(id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getParticipants(this.currentPage);
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getParticipants(this.currentPage);
      }
    });
  }

  filter() {
    this.userService.getAllParticipants().subscribe((response: any) => {
      this.participants = [];

      if (this.selectedGender != "" && this.selectedCollegeId != "") {
        for (let user of response) {
          if (user.gender == this.selectedGender && user.college_id == this.selectedCollegeId) {
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
          if (user.college_id == this.selectedCollegeId) {
            this.participants.push(user);
          }
        }
      }
      else {
        this.participants = response;
      }
    });
  }


}
