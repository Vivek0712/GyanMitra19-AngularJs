import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';

// CRUD Service for team_member
// Created by Aravind Raj
// 23/12/18

@Injectable({
  providedIn: 'root'
})
export class UserregistrationService {

  readonly baseUrl = 'registration/';
  constructor(private http: HttpClient, private app: AppService) { }
  createUser (name: String,college_id: String,department_id: String,degree_id: String,email_id: String,gender: String,mobile_number: String,password: String,yos: Number) {
    const body = { 
      name: name,
      college_id: college_id,
      department_id: department_id,
      degree_id: degree_id,
      email_id: email_id,
      gender: gender,
      mobile_number: mobile_number,
      type: "user",
      password: password,
      year: yos
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }
  readUser() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl));
  }
  verifyUser(mail_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const body = {
      email_id: mail_id
    }
    return this.http.post(this.app.getUrl(this.baseUrl + 'activate'), body).pipe(map(res => res, {'headers': headers}));
  }
}
