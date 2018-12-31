import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { DepartmentService } from 'src/app/services/department/department.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  currentPage: any;
  searchText:any;
  categories:Array<any>;
  departments:any;
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
    this.getEvents(1);
  }

  loadFull(){
    this.eventService.readAllEvents().subscribe((response: any) => {
      this.events = response; 
    })
  }

  getEvents(page: any) {
    this.eventService.readEvent(this.currentPage).subscribe((response: any) => {
     if(response.error == false){
       this.events = response.msg;
     }
     else{
       this.currentPage -= 1;
     }
    });
  }

  nextPage(){
    this.currentPage = this.currentPage + 1;
    this.getEvents(this.currentPage);
  }
  
  previousPage() {
      this.currentPage = this.currentPage -1;
      this.getEvents(this.currentPage);
  }

  getCategories() {
    this.categoryService.readCategory().subscribe((response: any) => {
      this.categories = response.docs;
    });
  }

  getDepartments() {
    this.departmentService.readDepartment(0).subscribe((response: any) => {
      this.departments = response;
    });
  }

  selectEvent(_id: string){
    this.selectedEventID = _id;
  }


}
