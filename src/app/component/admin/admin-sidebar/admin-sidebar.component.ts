import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  events:Array<any>;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents(){
    this.eventService.readWithEventCategory('Event').subscribe((response: any) => {
      this.events = response;
    })
  }

}
