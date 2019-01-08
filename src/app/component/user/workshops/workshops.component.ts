import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

declare var M: any;

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {

  workshops: Array<any> = [];
  statuses: any = {};
  departments: Array<any>;
  searchText: String;
  currentUserId: string;
  isCartConfirmed: Boolean = true;
  statusesLoaded: Boolean = false;

  constructor(private eventService: EventService, private userService: UserService, private eventRegistrationService: EventRegistrationService, public authService: AuthService, private deptService: DepartmentService) {
    this.loadFull();
  }

  ngOnInit() {
    this.loadFull();
    this.currentUserId = JSON.parse(localStorage.getItem('user')).id
    if (this.authService.isLoggedIn()) {
      this.userService.isCartConfirmed(this.currentUserId).subscribe((response: any) => {
        if (!response.error) {
          this.isCartConfirmed = response.isCartConfirmed
        }
      })
    }
  }

  checkEventRegistrations() {
    this.statuses = {}
    this.workshops.forEach((workshop) => {
      this.eventRegistrationService.checkRegistration(workshop._id, this.currentUserId).subscribe((response: any) => {
        this.statuses[workshop._id] = response;
      })
    })
    this.statusesLoaded = true;
  }

  reloadEvents() {
    this.loadFull();
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

  loadFull() {
    this.eventService.readWithEventCategory('Workshop').subscribe((response: any) => {
      this.workshops = response;
      this.checkEventRegistrations();
    })
    this.deptService.readDepartment(0).subscribe((response: any) => {
      this.departments = response;
    })
  }

}
