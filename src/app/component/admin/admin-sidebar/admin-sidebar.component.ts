import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  events:Array<any>;
  workshops:Array<any>;
  constructor(private eventService: EventService) {
   }

  ngOnInit() {
    this.loadEvents();
    this.loadWorkshops();
  }

  loadEvents(){
    this.eventService.readWithEventCategory('Event',0).subscribe((response: any) => {
      this.events = response;
    })
  }
  loadWorkshops(){
    this.eventService.readWithEventCategory('Workshop',0).subscribe((response: any) => {
      this.workshops = response;
    })
  }
}
