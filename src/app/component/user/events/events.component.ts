import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  events:Array<any>;
  selectedEventID:String;
  constructor(private eventService: EventService) { 
    this.selectedEventID='';
    this.loadFull();
  }
  ngOnInit() {
  }

  reloadEvents() {
    this.loadFull();
  }

  selectEvent(_id: string){
    this.selectedEventID = _id;
  }

  loadFull(){
    this.eventService.readWithEventCategory('Event').subscribe((response: any) => {
      this.events = response;
    })
  }
}
