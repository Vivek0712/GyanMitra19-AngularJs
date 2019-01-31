import { Component, OnInit } from '@angular/core';
import { ProbsService } from 'src/app/services/probs/probs.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var M:any;
@Component({
  selector: 'app-probs',
  templateUrl: './probs.component.html',
  styleUrls: ['./probs.component.css']
})
export class ProbsComponent implements OnInit {

  constructor(private probService: ProbsService, private formBuilder: FormBuilder) { }
  probsForm: FormGroup;
  Button:String;
  ngOnInit() {
    this.createForm();
  }
  get f() { return this.probsForm.controls; }
  onSubmit(form: FormGroup) {
    if(form.valid){
      this.probService.createProb( this.probsForm.get('name').value).subscribe((response: any) => {
        if ( response.error ) {
          M.toast({ html: response.msg , classes: 'roundeds'});
          this.createForm();
        } else {
          M.toast({ html: response.msg , classes: 'roundeds'});
          this.createForm();
        }
      });
    }else
    {
      M.toast({ html: 'Please Check The Form' , classes: 'roundeds'});
    }
  }
  createForm() {
    this.probsForm = this.formBuilder.group({
      _id: '',
      name: ['',Validators.required]
    });
    this.Button = 'Create';
  }
}
