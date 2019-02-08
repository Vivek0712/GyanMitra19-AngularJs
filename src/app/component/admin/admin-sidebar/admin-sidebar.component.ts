import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { RoleUserService } from 'src/app/services/role_user/role-user.service';

declare var M: any;

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  events: Array<any>;
  workshops: Array<any>;
  role: any;
  constructor(private eventService: EventService, private roleUserService: RoleUserService) {
  }

  ngOnInit() {
    this.checkForRole();
  }

  loadEvents() {
    if (this.role.role_id.name == "Organizer") {
      this.eventService.readWithPageAndDepartmentId('Event', this.role.department_id._id).subscribe((response: any) => {
        this.events = response;
      })
    }
    else {
      this.eventService.readWithEventCategory('Event', 0).subscribe((response: any) => {
        this.events = response;
      })
    }
  }
  loadWorkshops() {
    if (this.role.role_id.name == "Organizer") {
      this.eventService.readWithPageAndDepartmentId('Workshop', this.role.department_id._id).subscribe((response: any) => {
        this.workshops = response;
      })
    }
    else {
      this.eventService.readWithEventCategory('Workshop', 0).subscribe((response: any) => {
        this.workshops = response;
      })
    }
  }

  checkForRole() {
    this.roleUserService.readRoleUserById(JSON.parse(localStorage.getItem('user')).id).subscribe((response: any) => {
      if (response.success) {
        this.role = response.msg[0];
        this.loadEvents();
        this.loadWorkshops();
      }
      else {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
    })
  }
}
