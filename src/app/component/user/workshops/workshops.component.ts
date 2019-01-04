import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DepartmentService } from 'src/app/services/department/department.service';

declare var M: any;

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {

  workshops: Array<any>;
  departments: Array<any>;
  searchText: String;

  constructor(private eventService: EventService, private eventRegistrationService: EventRegistrationService, private authService: AuthService, private deptService: DepartmentService) {
    this.loadFull();
  }
  ngOnInit() {
    this.loadFull();
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
            }
          })
        }
      }
    })
  }

  loadFull() {
    this.eventService.readWithEventCategory('Workshop').subscribe((response: any) => {
      this.workshops = response;
    })
    this.deptService.readDepartment(0).subscribe((response: any)=>{
      this.departments = response;
    })
  }
}
