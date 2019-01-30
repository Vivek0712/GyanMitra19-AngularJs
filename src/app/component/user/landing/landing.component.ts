import { Component, OnInit } from '@angular/core';
import { endTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  ngOnInit() {
    // function myFunc(endtime: any) {
    //   
    // }
    setInterval(()=>{
      var t = Date.parse("February 8, 2019 09:00:00 GMT+0530") - Date.parse(new Date().toString());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      this.days = days;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    },1000)
  }


  


}
