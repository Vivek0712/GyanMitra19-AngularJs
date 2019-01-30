import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	(function init() {
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(endtime){
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    document.querySelector(".days > .value").innerText=t.days;
    document.querySelector(".hours > .value").innerText=t.hours;
    document.querySelector(".minutes > .value").innerText=t.minutes;
    document.querySelector(".seconds > .value").innerText=t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}
initializeClock(new Date("February 8, 2019 9:00:00 GMT+0530"))
})()
  
  }

}
