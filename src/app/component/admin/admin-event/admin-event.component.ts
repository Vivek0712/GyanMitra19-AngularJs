import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, NgForm } from '@angular/forms';
import { EventService } from '../../../services/event/event.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { elementStyleProp } from '@angular/core/src/render3/instructions';

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
  imageForm: FormGroup;
  events: Array<any>;
  categories: Array<Category>;
  departments: Array<Department>;
  Button: any;
  submitted: boolean;
  selectedCategory: Category;
  selectedDepartment: Department;
  allow_gender_mixing: Boolean;
  file_name: any;
  currentPage: any;
  searchText: any;
  selectedEventID: string;
  workshop: boolean;
  event: boolean;
  category: any;
  constructor(private eventService: EventService, private formBuilder: FormBuilder, private categoryService: CategoryService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.workshop = true;
    this.event = true;
    this.currentPage = 1;
    this.selectedEventID = '';
    this.getCategories();
    this.createForm();
    this.getEvents(1);
    this.getDepartments();
    this.submitted = false;
    this.allow_gender_mixing = false;
  }

  reloadEvents() {
    this.searchText = '';
    this.getEvents(1);
  }

  loadFull(){
    this.getEvents(1);
  }

  getEvents(page: any) {
    this.eventService.readWithPage(page).subscribe((response: any) => {
      if (response.error == false) {
        this.events = response.msg;
      }
      else {
        this.currentPage -= 1;
      }
    });
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.getEvents(this.currentPage);
  }

  previousPage() {
    this.currentPage = this.currentPage - 1;
    this.getEvents(this.currentPage);
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
    this.departmentService.readDepartment(0).subscribe((response: any) => {
      this.departments = response;
    });
  }

  selectEvent(_id: string) {
    this.selectedEventID = _id;
  }

  get f() { return this.eventForm.controls; }

  processFile(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      formData.append('_id', this.selectedEventID);
      this.eventService.uploadFile(formData).subscribe((response: any) => {
    
      })
    }
  }


  onSubmit(form: FormGroup) {
    this.submitted = true;
    if (form.value._id === '') {
      const data = form.value;
      this.eventService.createEvent(data.title, data.category_id, data.department_id, data.description, data.image_name, data.rules, data.start_time, data.end_time, data.event_date, data.prelims, data.round_1, data.round_2, data.finals, data.min_members, data.max_members, data.max_limit, data.contact_email, data.venue, data.amount, this.allow_gender_mixing, data.resourse_person).subscribe((response: any) => {
        if (response.error) {
          M.toast({ html: response.msg, classes: 'roundeds' });
          this.getEvents(this.currentPage);
          this.createForm();
        } else {
          M.toast({ html: response.msg, classes: 'roundeds' });
          this.getEvents(this.currentPage);
          this.createForm();
        }
      });
    } else {
      const data = form.value;
      this.eventService.updateEvent(data._id, data.title, data.category_id, data.department_id, data.description, data.image_name, data.rules, data.start_time, data.end_time, data.event_date, data.prelims, data.round_1, data.round_2, data.finals, data.min_members, data.max_members, data.max_limit, data.contact_email, data.venue, data.amount, this.allow_gender_mixing, data.resourse_person).subscribe((response: any) => {
        if (response.error) {
          M.toast({ html: response.msg, classes: 'roundeds' });
          this.getEvents(this.currentPage);
          this.createForm();
        } else {
          M.toast({ html: response.msg, classes: 'roundeds' });
          this.getEvents(this.currentPage);
          this.createForm();
        }
      });
    }
  }

  createForm() {
    this.event = true;
    this.workshop = true;
    this.submitted = false;
    this.eventForm = this.formBuilder.group({
      _id: '',
      title: '',
      category_id:'',
      department_id: '',
      description: '',
      rules: '',
      image_name: 'Not uploaded',
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
      allow_gender_mixing: '',
      resourse_person: '',
	    __v: ''
    });
    this.Button = 'Create';
  }


  deleteEvent(id: string) {
    this.eventService.deleteEvent(id).subscribe((response: any) => {
      if (response.error) {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.events = [];
        this.getEvents(this.currentPage);

        this.createForm();
      } else {
        M.toast({ html: response.msg, classes: 'roundeds' });
        this.events = [];
        this.getEvents(this.currentPage);
        this.createForm();
      }
    });
  }

  updateEvent(id: string, type: String) {
    this.Button = 'Update';
    const data = this.events.filter(eventName => {
      return eventName._id === id;
    });
    //data[0].image_name = '';
    if (type == "Workshop") {
      this.event = false;
      this.workshop = true;
	    data[0].resourse_person = '';

    } else if (type == "Event") {
      data[0].resourse_person = '';
      this.event = true;
      this.workshop = false;
    }
    this.eventForm.setValue(data[0]);
  }

  ChangeBoxes() {
    this.categoryService.ReadACategory(this.f.category_id.value).subscribe((response: any) => {
      if (!response.error) {
        this.category = response.msg;
        if (this.category.name == "Workshop") {
          this.event = false;
          this.workshop = true;
        }
        else if (this.category.name == "Event") {
          this.event = true;
          this.workshop = false;
        }
      }
    })

  }
}