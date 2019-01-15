import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { CourseService } from 'src/app/services/course/course.service';
import { AuthService } from 'src/app/services/auth/auth.service';
declare var M: any;
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService: CourseService, public authService: AuthService, private formBuilder: FormBuilder) { }
  courseForm: FormGroup;
  courses: any;
  Button: any;
  submitted:boolean;
  currentPage:any;
  searchText: any;
  ngOnInit() {
    this.submitted=false;
    this.currentPage=1;
    this.createForm();
    this.getCourses(this.currentPage);
    this.searchText = "";
  }
  nextPage(){
    this.currentPage = this.currentPage + 1;
    this.getCourses(this.currentPage);
  }
  
  previousPage() {
    if(this.currentPage == 1) {
    }
    else{
      this.currentPage = this.currentPage -1;
      this.getCourses(this.currentPage);
    }
  }
  get f() { return this.courseForm.controls; }
  onSubmit(form: FormGroup) {
    this.submitted=true;
    if(form.valid){
      if ( form.value._id === '') {
        this.courseService.createCourse( this.courseForm.get('name').value).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getCourses(this.currentPage);
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getCourses(this.currentPage);
            this.createForm();
          }
        });
      } else {
        this.courseService.updateCourse(form.value._id, form.value.name).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getCourses(this.currentPage);
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getCourses(this.currentPage);
            this.createForm();
          }
        });
      }
    }else
    {
      M.toast({ html: 'Please Check The Form' , classes: 'roundeds'});
    }
  }
  createForm() {
    this.submitted=false;
    this.courseForm = this.formBuilder.group({
      _id: '',
      name: ['',Validators.required]
    });
    this.Button = 'Create';
  }
  getCourses(page: any) {
    this.courseService.readCourse(page).subscribe((response: any) => {
     if(response.docs.length == 0){
       this.currentPage -=1;
     }
     else {
      this.courses = response.docs;
     }
    });

  }
  deleteCourse(id: string) {
  this.courseService.deleteCourse(id).subscribe((response: any) => {
    if ( response.error ) {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getCourses(this.currentPage);
      this.createForm();
    } else {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getCourses(this.currentPage);
      this.createForm();
    }
  });
  }
  updateCourse(id: string, name: string) {
    this.Button = 'Update';
    this.courseForm.setValue({
      _id: id,
      name: name
    });
  }
}
