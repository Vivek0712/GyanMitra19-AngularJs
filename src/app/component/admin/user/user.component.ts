import { Component, OnInit } from '@angular/core';
import { CollegeService } from 'src/app/services/college/college.service';
import { UserService } from 'src/app/services/user/user.service'

declare var M: any;

export interface College {
  _id: String,
  name: String
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  currentPage: any;
  searchText: any;
  participants: Array<any>;

  constructor(private collegeService:CollegeService, private userService: UserService) { }

  ngOnInit() {
    this.currentPage=1;
    this.getParticipants(1);
  }

  getAllParticipants(){
    this.userService.getAllParticipants().subscribe((response: any) => {
      this.participants = response;
    });
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
