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
  currentUserId:String;
  constructor(private userService: UserService,private eventRegistration:EventRegistrationService, private eventService: EventService,private eventRegistrationService: EventRegistrationService, public authService: AuthService, private deptService: DepartmentService) { 
    this.selectedEventID='';
    this.loadFull();
    this.currentUserId = (JSON.parse(localStorage.getItem('user'))).id
  }
  ngOnInit() {
    this.userService.isCartConfirmed(JSON.parse(localStorage.getItem('user')).id).subscribe((response: any)=>{
      if(!response.error){
        this.isCartConfirmed = response.isCartConfirmed
      }
    })
  }

  selectEvent(_id: string) {
    //let user_id = JSON.parse(localStorage.getItem('user')).id;
    this.eventRegistrationService.createEventRegistration(JSON.parse(localStorage.getItem('user')).id,_id).subscribe((response: any)=>{
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
    })
  }

  loadFull(){
    this.eventService.readWithEventCategory('Event').subscribe((response: any) => {
      this.events = response;
    })
    this.deptService.readDepartment(0).subscribe((response: any)=>{
      this.departments = response;
    })
  }
}
