import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { RegistrationService } from 'src/app/services/registration/registration.service';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
declare var M: any;

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {

  workshops: Array<any>;
  constructor(private eventService: EventService, private registrationService: EventRegistrationService) {
    this.loadFull();
  }
  ngOnInit() {
  }

  reloadEvents() {
    this.loadFull();
  }

  selectWorkshop(_id: string) {
    let user_id = JSON.parse(localStorage.getItem('user')).id;
    this.registrationService.checkRegistration(_id, user_id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
      } else {
        if (response.registered) {
          M.toast({ html: response.msg, classes: 'roundeds' });
        }
        else {
          this.registrationService.createEventRegistration(_id, user_id, 'Single').subscribe((response: any) => {
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
  }
}
