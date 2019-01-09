import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { UserService } from 'src/app/services/user/user.service';

declare var M: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  events:Array<any>;
  departments: Array<any>;
  selectedEventID:String;
  searchText: String;
  isCartConfirmed:Boolean = true;
  currentUserId:string;
  statusesLoaded: Boolean;
  statuses: any;
  currentPage: any = 1;

  constructor(private userService: UserService,private eventRegistration:EventRegistrationService, private eventService: EventService,private eventRegistrationService: EventRegistrationService, private authService: AuthService, private deptService: DepartmentService) { 
    this.selectedEventID='';
    this.loadFull(this.currentPage);
    this.currentPage = 1;
    this.currentUserId = '';
    if((JSON.parse(localStorage.getItem('user'))) != null){
      this.currentUserId = (JSON.parse(localStorage.getItem('user'))).id
    }
  }
  ngOnInit() {
    if(this.currentUserId != ''){
      this.userService.isCartConfirmed(this.currentUserId).subscribe((response: any)=>{
        if(!response.error){
          this.isCartConfirmed = response.isCartConfirmed
        }
      })
    }
  }
  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.loadFull(this.currentPage);
  }

  previousPage() {
    this.currentPage = this.currentPage - 1;
    this.loadFull(this.currentPage);
  }
  checkEventRegistrations() {
    this.statuses = {}
    this.events.forEach((event) => {
      this.eventRegistrationService.checkRegistration(event._id, this.currentUserId).subscribe((response: any) => {
        this.statuses[event._id] = response;
      });
    });
    this.statusesLoaded = true;
  }

  selectEvent(_id: string) {
    this.eventRegistrationService.createEventRegistration(JSON.parse(localStorage.getItem('user')).id,_id).subscribe((response: any)=>{
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.loadFull(this.currentPage);
      }
    })
  }

  loadFull(page: any){
    this.eventService.readWithEventCategory('Event', page).subscribe((response: any) => {
      this.events = response;
      if(this.currentUserId != ''){
        this.checkEventRegistrations();
      }
    })
    this.deptService.readDepartment(0).subscribe((response: any)=>{
      this.departments = response;
    })
  }
}
