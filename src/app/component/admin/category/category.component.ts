import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';

import { SearchfilterPipe } from 'src/app/pipes/searchfilter.pipe';

declare var M: any;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder) { }
  categoryForm: FormGroup;
  categories: Array<any>;
  Button: any;
  searchText: any;
  submitted:boolean;
  ngOnInit() {
    this.submitted=false;
    this.createForm();
    this.getCategorys();
    this.searchText = "";
  }


  get f() { return this.categoryForm.controls; }
  onSubmit(form: FormGroup) {
    this.submitted=true;
    if(form.valid){
      if ( form.value._id === '') {
        this.categoryService.createCategory( this.categoryForm.get('name').value).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getCategorys();
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getCategorys();
            this.createForm();
          }
        });
      } else {
        this.categoryService.updateCategory(form.value._id, form.value.name).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getCategorys();
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getCategorys();
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
    this.categoryForm = this.formBuilder.group({
      _id: '',
      name: ['',Validators.required]
    });
    this.Button = 'Create';
  }
  getCategorys() {
    this.categoryService.readCategory().subscribe((response: any) => {
      this.categories = response.docs;
    });


    //if(this.categories)

  }
  deleteCategory(id: string) {
  this.categoryService.deleteCategory(id).subscribe((response: any) => {
    if ( response.error ) {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getCategorys();
      this.createForm();
    } else {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getCategorys();
      this.createForm();
    }
  });
  }
  updateCategory(id: string, name: string,locale:String ) {
    this.Button = 'Update';
    this.categoryForm.setValue({
      _id: id,
      name: name
    });
  }

}
