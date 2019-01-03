import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.css']
})
export class EventParticipantsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 
    this.route.params.subscribe(param =>{console.log(param.id);});
  }

  ngOnInit() {
  }

}
