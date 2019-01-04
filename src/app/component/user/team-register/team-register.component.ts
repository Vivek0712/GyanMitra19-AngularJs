import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder , FormArray, NgForm } from '@angular/forms';
import { EventRegistrationService } from 'src/app/services/eventRegistration/event-registration.service';
import { ActivatedRoute } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';
declare var M: any;
@Component({
  selector: 'app-team-register',
  templateUrl: './team-register.component.html',
  styleUrls: ['./team-register.component.css']
})
export class TeamRegisterComponent implements OnInit {

  teamRegisterForm:FormGroup;
  Submitted:Boolean;
  event_id:String;
  public exampleData: Array<Select2OptionData>;
  constructor(private route: ActivatedRoute,private formbuilder: FormBuilder,private eventRegister:EventRegistrationService) { 
    this.route.params.subscribe(param => { this.event_id = param.id });
  }

  ngOnInit() {
    this.createForm();
    this.exampleData = [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
];
  }

  get f() { return this.teamRegisterForm.controls; }
  createForm() {
    this.teamRegisterForm = this.formbuilder.group({
      _id: '',
      name: ['',Validators.required],
      email_id: ['',Validators.required]
    });
    this.Submitted = false;
  }
  
  onSubmit(form: NgForm) {
    this.Submitted = true;
    if(form.valid) {
      this.eventRegister.createEventWithTeamRegistration(JSON.parse(localStorage.getItem('user')).email_id,this.event_id,this.teamRegisterForm.get('name').value,"leader").subscribe((response: any) => {
        if ( response.error ) {
          M.toast({ html: response.msg , classes: 'roundeds danger'});
          this.createForm();
        } else {
          M.toast({ html: response.msg , classes: 'roundeds'});
          this.createForm();
        }
      });

      this.eventRegister.createEventWithTeamRegistration(this.teamRegisterForm.get('email_id').value,this.event_id,this.teamRegisterForm.get('name').value,"member").subscribe((response: any) => {
        if ( response.error ) {
          console.log(response);
          M.toast({ html: response.msg , classes: 'roundeds danger'});
          this.createForm();
        } else {
          M.toast({ html: response.msg , classes: 'roundeds'});
          this.createForm();
        }
      });
    }
  }
  ngAfterViewInit() {
    $('#symbolId').on('change', (event) => {
        
        //you can use the selected value
    });
 }
}
