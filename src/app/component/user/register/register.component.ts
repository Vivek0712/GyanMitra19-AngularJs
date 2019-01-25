import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserregistrationService } from 'src/app/services/userregistration/userregistration.service';
import { CourseService } from 'src/app/services/course/course.service';
import { CollegeService } from 'src/app/services/college/college.service';
import { DegreeService } from 'src/app/services/degree/degree.service';
import { YearService } from 'src/app/services/year/year.service';
import { ConfigurationsService } from 'src/app/services/configurations/configurations.service';

declare var M: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private degreeservice: DegreeService, private configService: ConfigurationsService, private yearService: YearService, private collegeservice: CollegeService, private courseservice: CourseService, private reg: UserregistrationService, private router: Router, private formBuilder: FormBuilder, private userRegisterService: UserregistrationService) { }
  registerForm: FormGroup;
  Button: any;
  submitted = false;
  courses: Array<any>;
  colleges: Array<any>;
  degrees: Array<any>
  years: Array<any>;
  registrationEnabled: boolean =true;
  ngOnInit() {
    this.configService.getConfig('UserRegistration').subscribe((response:any)=>{
      if(response.error){
        this.registrationEnabled = false
      } else {
        this.registrationEnabled = response.msg
      }
    })
    this.createForm();
    this.getCourses();
    this.getColleges();
    this.getDegrees();
    this.getYears();
  }
  get f() { return this.registerForm.controls; }
  //Create Form is Used to Initalize the Values the Form
  createForm() {
    this.Button = "Register"
    this.submitted = false;
    this.registerForm = this.formBuilder.group({
      email_id: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.required],
      password: ['', Validators.required],
      conpassword: ['', Validators.required],
      mobile_number: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]{10}$")])],
      degree_id: ['', Validators.required],
      college_id: ['', Validators.required],
      course_id: ['', Validators.required],
      gender: ['', Validators.required],
      year_id: ['', Validators.required]
    });
  }
  //The action performed After the Button is Pressed
  onSubmit(values: NgForm) {
    this.submitted = true;
    this.Button = "Checking...";
    if (this.registerForm.valid) {
      const email_id = this.registerForm.get('email_id').value;
      const password = this.registerForm.get('password').value;
      const conpassword = this.registerForm.get('conpassword').value;
      const name = this.registerForm.get('name').value;
      const mobile_number = this.registerForm.get('mobile_number').value;
      const gender = this.registerForm.get('gender').value;
      const college_id = this.registerForm.get('college_id').value;
      const degree_id = this.registerForm.get('degree_id').value;
      const course_id = this.registerForm.get('course_id').value;
      const year = this.registerForm.get('year_id').value;
      if (password !== conpassword) {
        M.toast({ html: 'Passwords does not match', classes: 'rounded' });
        this.createForm();
      }
      else {
        this.Button = "Sending Mail......";
        this.reg.createUser(name, college_id, course_id, degree_id, email_id, gender, mobile_number, password, year, false, "online").subscribe((response: any) => {
          if (response.error) {
            M.toast({ html: response.msg, classes: 'roundeds' });

          } else {
            M.toast({ html: response.msg, classes: 'roundeds' });
            this.createForm();
          }
        });
      }
    }
    else {
      M.toast({ html: 'Please Check the Form', classes: 'rounded' });
      this.Button = "Register";
    }
  }
  getCourses() {
    this.courseservice.readCourse(0).subscribe((response: any) => {
      this.courses = response;
    });
  }
  getColleges() {
    this.collegeservice.readCollege(0).subscribe((response: any) => {
      this.colleges = response;
    });
  }
  getDegrees() {
    this.degreeservice.readDegree(0).subscribe((response: any) => {
      this.degrees = response;
    });
  }
  getYears() {
    this.yearService.readYear(0).subscribe((response: any) => {
      this.years = response;
    });
  }
}
