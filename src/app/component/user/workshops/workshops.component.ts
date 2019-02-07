import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { ConfigurationsService } from 'src/app/services/configurations/configurations.service';
declare var M: any;

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  user: any;
  registeredEvents: Array<string> = [];
  workshops: Array<any> = [];
  statuses: any = {};
  departments: Array<any> = [];
  searchText: String = 'Computer Science and Engineering and Information Technology';
  currentUserId: string;
  statusesLoaded: Boolean = false;
  currentPage: any = 1
  registrationEnabled: boolean = true;
  paymentForm: FormGroup;
  workshopEnabled: Boolean = false; 
  constructor(private eventService: EventService,
    private eventRegistrationService: EventRegistrationService,
    public authService: AuthService,
    private deptService: DepartmentService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private configService: ConfigurationsService) {
    this.currentPage = 1;
    this.eventService.readWithPageAndDepartment('Workshop', this.searchText, 1).subscribe((response: any) => {
      this.workshops = response;
      if (this.currentUserId != '') {
        this.checkEventRegistrations();
      }
    })
    configService.getConfig('Registration').subscribe((response: any) => {
      if (response.error) {
        this.registrationEnabled = false
      } else {
        this.registrationEnabled = response.msg
      }
    })
    configService.getConfig('WorkshopRegistration').subscribe((response: any) => {
      if (response.error) {
        this.workshopEnabled = false
      } else {
        this.workshopEnabled = response.msg
      }
    })
  }

  ngOnInit() {
    this.userService.refreshUser().subscribe((response: any) => {
      this.authService.refreshSession(response)
      this.user = (JSON.parse(localStorage.getItem('user')))
    })
    this.currentPage = 1;
    this.user = (JSON.parse(localStorage.getItem('user')))
    if (this.currentUserId != '') {
      this.eventService.readWithPageAndDepartment('Workshop', 'All', 1).subscribe((response: any) => {
        this.workshops = response;
      })
    }
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
        this.getRegistrations();
      }
      if (this.currentUserId != '') {
        this.checkEventRegistrations();
      }
    })
    this.deptService.readDepartment(0).subscribe((response: any) => {
      this.departments = response;
    })
  }

  getRegistrations() {
    this.eventRegistrationService.getRegisteredEvents(this.currentUserId, 'Workshop').subscribe((response: any) => {
      this.registeredEvents = response.msg;
    })
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
              this.getRegistrations();
            }
          })
        }
      }
    })
  }

  filter() {
    this.currentPage = 1
    this.loadFull(this.currentPage);
  }


  loadFull(page: any) {
    if (this.searchText == 'All') {
      this.eventService.readWithPageAndDepartment('Workshop', 'All', this.currentPage).subscribe((response: any) => {
        if (response.length == []) {
          this.currentPage -= 1
        }
        else {
          this.getRegistrations();
          this.workshops = response;
        }
      })
    }
    else {
      this.eventService.readWithPageAndDepartment('Workshop', this.searchText, page).subscribe((response: any) => {
        if (response.length == []) {
          this.currentPage -= 1
        }
        else {
          this.getRegistrations();
          this.workshops = response;
        }
      })
    }
    this.deptService.readDepartment(0).subscribe((response: any) => {
      this.departments = response;
    })
  }
}