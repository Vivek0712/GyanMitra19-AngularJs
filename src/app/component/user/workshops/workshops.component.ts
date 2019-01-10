import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AppService } from 'src/app/services/app/app.service';

declare var M: any;

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  user: any;
  confirmed: Boolean;
  paid: Boolean;
  constructor(private appService: AppService, private eventService: EventService,private authService:AuthService,private deptService: DepartmentService,private eventRegistrationService:EventRegistrationService) { }
  
  ngOnInit() {
    //this.user = [];
    this.getCurrentUser();
    this.getWorkshop(this.currentPage);
  }
  getCurrentUser() {
    this.authService.getCurrentUser().subscribe((response: any) => {
      this.user = response.profile;
    })
  }
  getWorkshop(page: any) {
    this.eventService.readWithPageAndDepartment('Workshop', this.searchText, page).subscribe((response: any) => {
      if (response.length == []) {
        this.currentPage -= 1
      }
      else {
        this.workshops = response;

      }
      if (this.currentUserId != '') {
        //this.checkEventRegistrations();
      }
    })
    this.deptService.readDepartment(0).subscribe((response: any) => {
      this.departments = response;
    })
  }

  workshops: Array<any>;
  statuses: any = {};
  departments: Array<any>;
  searchText: String = 'Computer Science and Engineering and Information Technology';
  currentUserId: string;
  isCartConfirmed: Boolean = true;
  statusesLoaded: Boolean = false;
  currentPage: any = 1

  // constructor(private eventService: EventService, private userService: UserService, private eventRegistrationService: EventRegistrationService, public authService: AuthService, private deptService: DepartmentService) {
  //   this.currentPage = 1;
  //   this.eventService.readWithPageAndDepartment('Workshop', this.searchText, 1).subscribe((response: any) => {
  //     this.workshops = response;
  //     if (this.currentUserId != '') {
  //       this.checkEventRegistrations();
  //     }
  //   })
  // }

  // ngOnInit() {
  //   this.loadFull(this.currentPage);
  //   this.currentUserId = JSON.parse(localStorage.getItem('user')).id
  //   if (this.authService.isLoggedIn()) {
  //     this.userService.isCartConfirmed(this.currentUserId).subscribe((response: any) => {
  //       if (!response.error) {
  //         this.isCartConfirmed = response.isCartConfirmed
  //       }
  //     })
  //   }
  // }

  checkEventRegistrations() {
    this.statuses = {}
    this.workshops.forEach((workshop) => {
      this.eventRegistrationService.checkRegistration(workshop._id, this.currentUserId).subscribe((response: any) => {
        this.statuses[workshop._id] = response;
      })
    })
    this.statusesLoaded = true;
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.getWorkshop(this.currentPage);
  }

  previousPage() {
    this.currentPage = this.currentPage - 1;
    this.getWorkshop(this.currentPage);
  }

  reloadEvents() {
    this.getWorkshop(this.currentPage);
  }

  selectWorkshop(_id: string) {
    let user_id = JSON.parse(localStorage.getItem('user')).id;
    this.eventRegistrationService.checkWorkshopRegistration(_id, user_id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      } else {
        if (response.registered) {
          M.toast({ html: response.msg, classes: 'roundeds' });
        }
        else {
          this.eventRegistrationService.createWorkshopRegistration(_id, user_id).subscribe((response: any) => {
            if (response.error) {
              M.toast({ html: response.msg, classes: 'roundeds' });
            } else {
              M.toast({ html: response.msg, classes: 'roundeds' });
              this.reloadEvents();
            }
          })
        }
      }
    })
  }

  // filter() {
  //   this.currentPage = 1
  //   this.loadFull(this.currentPage);
  // }

  // loadFull(page: any) {
  //   this.eventService.readWithPageAndDepartment('Workshop', this.searchText, page).subscribe((response: any) => {
  //     if (response.length == []) {
  //       this.currentPage -= 1
  //     }
  //     else {
  //       this.workshops = response;

  //     }
  //     if (this.currentUserId != '') {
  //       //this.checkEventRegistrations();
  //     }
  //   })
  //   this.deptService.readDepartment(0).subscribe((response: any) => {
  //     this.departments = response;
  //   })
  // }
}