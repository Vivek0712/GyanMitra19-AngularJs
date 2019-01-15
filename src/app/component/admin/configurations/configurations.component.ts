import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';
import { ConfigurationsService } from 'src/app/services/configurations/configurations.service';

declare var M: any;
@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {

  constructor(private configService: ConfigurationsService, private formBuilder: FormBuilder) { }
  ConfigurationForm: FormGroup;
  configs: Array<any>;
  Button: any;
  submitted:boolean;
  value:Boolean;
  searchText: any;
  ngOnInit() {
    this.submitted=false;
    this.createForm();
    this.getConfigs();
    this.value = false;
    this.searchText = "";
  }


  get f() { return this.ConfigurationForm.controls; }
  onSubmit(form: FormGroup) {
    this.submitted=true;
    if(form.valid){
      if ( form.value._id === '') {
        this.configService.createConfig( this.ConfigurationForm.get('name').value,this.value).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getConfigs();
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getConfigs();
            this.createForm();
          }
        });
      } else {
        this.configService.updateConfig(form.value._id, form.value.name,this.value).subscribe((response: any) => {
          if ( response.error ) {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getConfigs();
            this.createForm();
          } else {
            M.toast({ html: response.msg , classes: 'roundeds'});
            this.getConfigs();
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
    this.ConfigurationForm = this.formBuilder.group({
      _id: '',
      name: ['',Validators.required]
    });
    this.Button = 'Create';
  }
  getConfigs() {
    this.configService.readConfig().subscribe((response: any) => {
      this.configs = response.docs;
    });


    //if(this.categories)

  }
  deleteConfiguration(id: string) {
  this.configService.deleteConfig(id).subscribe((response: any) => {
    if ( response.error ) {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getConfigs();
      this.createForm();
    } else {
      M.toast({ html: response.msg , classes: 'roundeds'});
      this.getConfigs();
      this.createForm();
    }
  });
  }
  updateConfiguration(id: string, name: string) {
    this.Button = 'Update';
    this.ConfigurationForm.setValue({
      _id: id,
      name: name
    });
  }

  toggle(){
    if(this.value == true){
      this.value = false;
    }
    else {
      this.value = true;
    }
  }
}
