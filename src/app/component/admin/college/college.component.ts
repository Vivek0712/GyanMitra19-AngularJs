import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { CollegeService } from 'src/app/services/admin/college/college.service';
import { AuthService } from 'src/app/services/auth/auth.service';
declare var M: any;
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  constructor(private collegeService: CollegeService, private authService: AuthService, private formBuilder: FormBuilder) { }
  collegeForm: FormGroup;
  colleges: any;
  Button: any;
  ngOnInit() {
    this.createForm();
    this.getColleges();
  }
  onSubmit(form: NgForm) {
    if ( form.value._id === '') {
      this.collegeService.createCollege( this.collegeForm.get('name').value,this.collegeForm.get('locale').value ).subscribe((response: any) => {
        if ( response.error ) {
          M.toast({ html: response.msg , classes: 'roundeds'});
          this.getColleges();
          this.createForm();
        } else {
          M.toast({ html: response.msg , classes: 'roundeds'});
          this.getColleges();
          this.createForm();
        }
      });
    } else {
      this.collegeService.updateCollege(form.value._id, form.value.name,form.value.locale).subscribe((response: any) => {
        if ( response.error ) {
          M.toast({ html: response.msg , classes: 'roundeds'});
          this.getColleges();
          this.createForm();
        } else {
          M.toast({ html: response.msg , classes: 'roundeds'});
          this.getColleges();
          this.createForm();
        }
      });
    }
  }
  createForm() {
    this.collegeForm = this.formBuilder.group({
      _id: '',
      name: ['',Validators.required],
      locale:['',Validators.required]
    });
    this.Button = 'Create';
  }
  getColleges() {
    this.collegeService.readCollege().subscribe((response: any) => {
     this.colleges = response.docs;
    });

  }
  deleteCollege(id: string) {
  this.collegeService.deleteCollege(id).subscribe((response: any) => {
    if ( response.error ) {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getColleges();
      this.createForm();
    } else {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getColleges();
      this.createForm();
    }
  });
  }
  updateCollege(id: string, name: string ) {
    this.Button = 'Update';
    this.collegeForm.setValue({
      _id: id,
      name: name
    });
  }


}
