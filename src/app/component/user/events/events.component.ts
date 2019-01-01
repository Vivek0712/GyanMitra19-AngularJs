import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { DepartmentService } from 'src/app/services/department/department.service';

export interface Event {
  _id: String;
  title: String;
  department: String;
  description: String;
  image_name: String;
  rules: String;
  start_time: String;
  end_time: String;
  event_date: String;
  prelims: String;
  round_1: String;
  round_2: String;
  finals: String;
  min_members: String;
  max_members: String;
  max_limit: String;
  contact_email: String;
  venue: String;
  amount: String;
  gender_mixing_text:String;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  currentPage: any;
  searchText:any;
  categories:Array<any>;
  departments:Array<any>;
  selectedEventID:any;
  events: Array<any>;
  constructor(private eventService: EventService,private categoryService:CategoryService,private departmentService: DepartmentService) { 
    this.currentPage=1;
    this.selectedEventID='';
    this.loadFull();
  }
  ngOnInit() {
  }

  reloadEvents() {
    this.searchText='';
    this.loadFull();
  }

  getCategory(category_id: String):String {
    let s = "";
    this.categoryService.readCategory().subscribe((response: any) => {
      for(let cat in response.docs){
        if(response.docs[cat]._id == category_id){
          s = s+response.docs[cat].name;
          console.log(s);
        }
      }
    });
    return s;
  }

  getDepartment(department_id: String): any {
    this.departmentService.readDepartment(0).subscribe((response: any) => {
      for(let dep in response){
        if(response[dep]._id == department_id){
          return response[dep].name;
        }
      }
    });
  }

  selectEvent(_id: string){
    this.selectedEventID = _id;
  }


  loadFull(){
    let e:Event;
    this.eventService.readAllEvents().subscribe((response: any) => {
      for (let event in response) {
        console.log(this.getCategory(response[event].category_id));
        if( this.getCategory(response[event].category_id) === "Event" ) {
          e._id = response[event]._id;
          e.title = response[event].title;
          e.department = this.getDepartment(response[event].department_id);
          e.description = response[event].description;
          e.image_name = response[event].image_name;
          e.rules = response[event].rules;
          e.start_time = response[event].start_time;
          e.end_time = response[event].end_time;
          e.event_date = response[event].event_date;
          e.prelims = response[event].prelims;
          e.round_1 = response[event].round_1;
          e.round_2 = response[event].round_2;
          e.finals = response[event].finals;
          e.min_members = response[event].min_members;
          e.max_members = response[event].max_members;
          e.max_limit = response[event].max_limit;
          e.contact_email = response[event].contact_email;
          e.venue = response[event].venue;
          e.amount = response[event].amount;
          if(!response[event].allow_gender_mixing){
            e.gender_mixing_text = "Warning: Gender mixing not allowed"
          }
          this.events.push(e);
        }
      } 
    })
  }


}
