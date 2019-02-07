import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserregistrationService } from 'src/app/services/userregistration/userregistration.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { CollegeService } from 'src/app/services/college/college.service';
import { DegreeService } from 'src/app/services/degree/degree.service';
import { YearService } from 'src/app/services/year/year.service';
import { CourseService } from 'src/app/services/course/course.service';
declare var M: any;

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {
  constructor(private yearService: YearService, private degreeservice: DegreeService, private collegeservice: CollegeService, private courseService: CourseService, private reg: UserregistrationService, private router: Router, private formBuilder: FormBuilder) { }
  registerForm: FormGroup;

  Button: any;
  submitted = false;
  departments: Array<any>;
  colleges: Array<any>;
  degrees: Array<any>;
  years: Array<any>;

  ngOnInit() {
    this.createForm();
    this.getDepartments();
    this.getColleges();
    this.getDegrees();
    this.getYears();
  }

  getYears() {
    this.yearService.readYear(0).subscribe((response: any) => {
      this.years = response;
    });
  }

  get f() { return this.registerForm.controls; }
  //Create Form is Used to Initalize the Values the Form
  createForm() {
    this.Button = "Register"
    this.submitted = false;
    this.registerForm = this.formBuilder.group({
      email_id: ['', Validators.required],
      name: ['', Validators.required],
      // password: ['', Validators.required],
      // conpassword: ['', Validators.required],
      mobile_number: ['', Validators.required],
      degree_id: [''],
      college_id: [''],
      department_id: [''],
      gender: [''],
      year_id: ['']
    });
  }
  //The action performed After the Button is Pressed
  onSubmit(values: NgForm) {
    this.submitted = true;
    this.Button = "Checking...";
    if (this.registerForm.valid) {
      const email_id = this.registerForm.get('email_id').value;
      // const password = this.registerForm.get('password').value;
      // const conpassword = this.registerForm.get('conpassword').value;
      const name = this.registerForm.get('name').value;
      const mobile_number = this.registerForm.get('mobile_number').value;
      const gender = this.registerForm.get('gender').value;
      const college_id = this.registerForm.get('college_id').value;
      const degree_id = this.registerForm.get('degree_id').value;
      const department_id = this.registerForm.get('department_id').value;
      const year_id = this.registerForm.get('year_id').value;

      this.reg.createUser(name, college_id, department_id, degree_id, email_id, gender, mobile_number, email_id, year_id, true, "offline").subscribe((response: any) => {
        if (response.error) {
          M.toast({ html: response.msg, classes: 'roundeds' });
        } else {
          M.toast({ html: response.msg, classes: 'roundeds' });
          this.createForm();
        }
      });
    }
    else {
      M.toast({ html: 'Please Check the Form', classes: 'rounded' });
      this.Button = "Register";
    }
  }
  getDepartments() {
    this.courseService.readCourse(0).subscribe((response: any) => {
      this.departments = response;
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

}
