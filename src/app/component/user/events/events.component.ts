import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { UserService } from 'src/app/services/user/user.service';
import { ConfigurationsService } from 'src/app/services/configurations/configurations.service';

declare var M: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  events: Array<any>;
  departments: Array<any>;
  searchText: String = 'All';
  currentUserId: string = '';
  currentPage: any = 1;
  user: any;
  registeredEvents: Array<string> = [];
  registrationEnabled : boolean = true;

  constructor(private userService: UserService, private configService: ConfigurationsService, private eventService: EventService, private eventRegistrationService: EventRegistrationService, private authService: AuthService, private deptService: DepartmentService) {
    configService.getConfig('Registration').subscribe((response: any)=>{
      if(response.error){
        this.registrationEnabled = false
      } else {
        this.registrationEnabled = response.msg
      }
    })
  }
  ngOnInit() {
    if (this.currentUserId != '') {
      this.eventService.readWithPageAndDepartment('Event', 'All', 1).subscribe((response: any) => {
        this.events = response;
      })
    }
    this.currentPage = 1;
    this.currentUserId = '';
    this.user = (JSON.parse(localStorage.getItem('user')))
    if (this.user != null) {
      this.currentUserId = this.user.id;
      this.userService.refreshUser().subscribe((response) => {
        this.authService.refreshSession((response));
        this.user = (JSON.parse(localStorage.getItem('user')))
      })
    }
    this.getRegistrations();
    this.loadFull(this.currentPage);
  }

  getRegistrations() {
    this.eventRegistrationService.getRegisteredEvents(this.currentUserId, 'Event').subscribe((response: any) => {
      this.registeredEvents = response.msg;
    })
  }

  filter() {
    this.currentPage = 1;
    this.loadFull(this.currentPage);
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.loadFull(this.currentPage);
  }

  previousPage() {
    this.currentPage = this.currentPage - 1;
    this.loadFull(this.currentPage);
  }

  selectEvent(_id: string) {
    this.eventRegistrationService.createEventRegistration(JSON.parse(localStorage.getItem('user')).id, _id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadFull(this.currentPage);
      }
    })
  }

  loadFull(page: any) {
    if (this.searchText == 'All') {
      this.eventService.readWithPageAndDepartment('Event', 'All', this.currentPage).subscribe((response: any) => {
        if (response.length == []) {
          this.currentPage -= 1
        }
        else {
          this.getRegistrations();
          this.events = response;

        }
      })
    }
    else {
      this.eventService.readWithPageAndDepartment('Event', this.searchText, page).subscribe((response: any) => {
        if (response.length == []) {
          this.currentPage -= 1
        }
        else {
          this.getRegistrations();
          this.events = response;
        }
      })
    }
    this.deptService.readDepartment(0).subscribe((response: any) => {
      this.departments = response;
    })
  }
}
