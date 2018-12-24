import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, FormArray, NgForm } from '@angular/forms';
import { EventService } from '../../../services/event/event.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { DepartmentService } from 'src/app/services/department/department.service';
declare var M: any;

export interface Category {
  _id: String,
  name: String
}

export interface Department {
  _id: String,
  name: String
}
@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})



export class AdminEventComponent implements OnInit {
  eventForm: FormGroup;
  events: Array<any>;
  categories: Array<Category>;
  departments: Array<Department>;
  Button: any;
  submitted: boolean;
  selectedCategory: Category;
  selectedDepartment: Department;
  allow_gender_mixing: Boolean;
  file_name: any;

  constructor(private eventService: EventService, private formBuilder: FormBuilder, private categoryService: CategoryService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.file_name = "ChooseFileName";
    this.getCategories();
    this.createForm();
    this.getEvents();
    this.getDepartments();
    this.submitted = false;
    this.allow_gender_mixing = false;
    this.setFileName();
  }

  changeGenderMixing() {
    this.allow_gender_mixing = !this.allow_gender_mixing;
  }

  getCategories() {
    this.categoryService.readCategory().subscribe((response: any) => {
      this.categories = response.docs;
    });
  }

  getDepartments() {
    this.departmentService.readDepartment().subscribe((response: any) => {
      this.departments = response.docs;
    });
  }
  setFileName() {
   this.file_name = this.eventForm.get('image_name').value;
  }

  get f() { return this.eventForm.controls; }


  onSubmit(form: NgForm) {
    this.submitted = true;
     console.log(form.value);
    // const data = form.value;
    // this.eventService.createEvent( data.title, data.category_id, data.department_id,data.description, data.image_name, data.rules, data.start_time, data.end_time, data.event_date, data.prelims, data.round_1, data.round_2, data.finals, data.min_members, data.max_members, data.max_limit, data.contact_email, data.venue, data.amount, this.allow_gender_mixing ).subscribe((response: any) => {
    //         if ( response.error ) {
    //           M.toast({ html: response.msg , classes: 'roundeds'});
    //           this.getEvents();
    //           this.createForm();
    //         } else {
    //           M.toast({ html: response.msg , classes: 'roundeds'});
    //           this.getEvents();
    //           this.createForm();
    //         }
    //       });
    /*if (form.value._id === '') {
      const data = form.value;
      this.eventService.createEvent(data.title, data.category_id, data.department_id, data.description, data.image_name, data.rules, data.start_time, data.end_time, data.event_date, data.prelims, data.round_1, data.round_2, data.finals, data.min_members, data.max_members, data.max_limit, data.contact_email, data.venue, data.amount, this.allow_gender_mixing).subscribe((response: any) => {
        if (response.error) {
          M.toast({ html: response.msg, classes: 'roundeds' });
          this.getEvents();
          this.createForm();
        } else {
          M.toast({ html: response.msg, classes: 'roundeds' });
          this.getEvents();
          this.createForm();
        }
      });
    } else {
      const data = form.value;
      this.eventService.updateEvent(data._id, data.title, data.category_id, data.department_id, data.description, data.image_name, data.rules, data.start_time, data.end_time, data.event_date, data.prelims, data.round_1, data.round_2, data.finals, data.min_members, data.max_members, data.max_limit, data.contact_email, data.venue, data.amount, this.allow_gender_mixing).subscribe((response: any) => {
        if (response.error) {
          M.toast({ html: response.msg, classes: 'roundeds' });
          this.getEvents();
          this.createForm();
        } else {
          M.toast({ html: response.msg, classes: 'roundeds' });
          this.getEvents();
          this.createForm();
        }
      });
    }*/
  }


  createForm() {
    this.submitted = false;
    this.eventForm = this.formBuilder.group({
      __v: '',
      _id: '',
      title: '',
      category_id: '',
      department_id: '',
      description: '',
      rules: '',
      image_name: '',
      start_time: '',
      end_time: '',
      event_date: '',
      prelims: '',
      round_1: '',
      round_2: '',
      finals: '',
      min_members: '',
      max_members: '',
      max_limit: '',
      contact_email: '',
      venue: '',
      amount: '',
      allow_gender_mixing: ''
    });
    this.Button = 'Create';
  }

  getEvents() {
    this.eventService.readEvent().subscribe((response: any) => {
      this.events = response.docs;
    });
  }

  deleteEvent(id: string) {
    this.eventService.deleteEvent(id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getEvents();
        this.createForm();
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.getEvents();
        this.createForm();
      }
    });
  }

  updateEvent(id: string) {
    this.Button = 'Update';
    const data = this.events.filter(eventName => {
      return eventName._id === id;
    });
    this.eventForm.setValue(data[0]);
  }
}
