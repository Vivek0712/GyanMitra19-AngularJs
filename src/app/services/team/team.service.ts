import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';

// CRUD Service for team
// Created by Aravind Raj
// 23/12/18

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  readonly baseUrl = 'team/';
  constructor(private http: HttpClient, private app: AppService) { }
  createTeam (name: String,user_id: String) {
    const body = { 
      name: name,
      user_id: user_id
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }
  readTeam() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl));
  }
  updateTeam(id: String,name: String,user_id: String) {
    const body = { 
      _id: id,
      name: name,
      user_id: user_id
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + "update/"+`${id}`), body).pipe(map(res => res, {'headers': headers}));
  }
  deleteTeam(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl +"delete/"+ `${id}` ),{}).pipe(map(res => res, {'headers': headers}));
  }
}
