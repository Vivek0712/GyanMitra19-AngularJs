import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { EventService } from '../../../services/event/event.service';

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent implements OnInit {
  eventForm: FormGroup;
  categories: any;
  Button: any;
  submitted:boolean;
  constructor(private eventService: EventService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.getEvents();
  }
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
    
  }

}
