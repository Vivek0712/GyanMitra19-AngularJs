import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
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
  submitted:boolean;
  selectedCategory:Category;
  selectedDepartment:Department;
  allow_gender_mixing: Boolean;

  constructor(private eventService: EventService,private formBuilder: FormBuilder, private categoryService: CategoryService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getCategories();
    this.createForm();
    this.getEvents();
    this.getDepartments();
    this.submitted = false;
    this.allow_gender_mixing = false;
  }

  changeGenderMixing(){
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

  get f() { return this.eventForm.controls; }
    
  onSumbit(form: NgForm) {
    console.log('hello')
  }

  // onSubmit(form: NgForm) {
  //   this.submitted=true;
  //   if(form.valid){
  //     if ( form.value._id === '') {
  //       this.eventService.createEvent( this.eventForm.get('title').value, this.eventForm.get('') ).subscribe((response: any) => {
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
  //     } else {
  //       this.eventService.updateEvent(form.value._id, form.value.name).subscribe((response: any) => {
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
  //     }
  //   }else
  //   {
  //     M.toast({ html: 'Please Check The Form' , classes: 'roundeds'});
  //   }
  // }

  createForm(){
    this.submitted=false;
    this.eventForm = this.formBuilder.group({
      _id: '',
      title: ['',Validators.required],
      category_id:['',Validators.required],
      department_id:['',Validators.required],
      description:['',Validators.required],
      rules:['',Validators.required],
      start_time:['',Validators.required],
      end_time:['',Validators.required],
      event_date:['',Validators.required],
      prelims:[''],
      round_1:[''],
      round_2:[''],
      finals:[''],
      min_members:[''],
      max_members:[''],
      max_limit:[''],
      contact_email:['',Validators.required,Validators.email],
      venue:['',Validators.required],
      amount:['',Validators.required],
      allow_gender_mixing:['',Validators.required]
    });
    this.Button = 'Create';
  }

  getEvents(){
    this.eventService.readEvent().subscribe((response: any) => {
      this.events = response.docs;
    });
  }

  deleteEvent(id: string) {
    this.eventService.deleteEvent(id).subscribe((response: any) => {
      if ( response.error ) {
        M.toast({ html: response.msg , classes: 'roundeds'});
        this.getEvents();
        this.createForm();
      } else {
        M.toast({ html: response.msg , classes: 'roundeds'});
        this.getEvents();
        this.createForm();
      }
    });
    }

    updateEvent(id: string, name: string,locale:String ) {
      this.Button = 'Update';
      this.eventForm.setValue({
        _id: id,
        name: name
      });
    }
}
