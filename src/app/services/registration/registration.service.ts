import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';

// CRUD Service for registration
// Created by Aravind Raj
// 23/12/18

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  readonly baseUrl = 'registration/';
  constructor(private http: HttpClient, private app: AppService) { }
  createRegistration (user_id: String,registration_type: String,registration_id: String) {
    const body = { 
      user_id: user_id ,
      registration_id: registration_id,
      registration_type: registration_type
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }
  readRegistration() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl));
  }
  updateRegistration(id: String,user_id: String,registration_type: String,registration_id: String) {
    const body = { 
      _id: id,
      user_id: user_id ,
      registration_id: registration_id,
      registration_type: registration_type
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.app.getUrl(this.baseUrl + `${id}`), body).pipe(map(res => res, {'headers': headers}));
  }
  deleteCategory(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.app.getUrl(this.baseUrl + `${id}` ) ).pipe(map(res => res, {'headers': headers}));
  }
}
