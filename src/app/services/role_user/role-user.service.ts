import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';

// CRUD Service for role_user
// Created by Aravind Raj
// 23/12/18

@Injectable({
  providedIn: 'root'
})
export class RoleUserService {
  readonly baseUrl = 'role_user/';
  constructor(private http: HttpClient, private app: AppService) { }
  createRoleUser (role_id: String,user_id: String) {
    const body = { 
      role_id: role_id,
      user_id: user_id
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }
  readRoleUser() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl));
  }
  updateRoleUser(id: String,role_id: String,user_id: String) {
    const body = { 
      _id: id,
      role_id: role_id,
      user_id: user_id
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.app.getUrl(this.baseUrl + `${id}`), body).pipe(map(res => res, {'headers': headers}));
  }
  deleteRoleUser(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.app.getUrl(this.baseUrl + `${id}` ) ).pipe(map(res => res, {'headers': headers}));
  }
}
