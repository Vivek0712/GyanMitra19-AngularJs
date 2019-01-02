import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {

  workshops:Array<any>;
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
    this.eventService.readWithEventCategory('Workshop').subscribe((response: any) => {
      this.workshops = response;
    })
  }
}
