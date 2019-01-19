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
export class TeamMemberService {
  readonly baseUrl = 'team_member/';
  constructor(private http: HttpClient, private app: AppService) { }
  createTeamMember (team_id: String,user_id: String) {
    const body = { 
      team_id: team_id,
      user_id: user_id
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }
  readTeamMember() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl));
  }
  updateTeamMember(id: String,team_id: String,user_id: String) {
    const body = { 
      _id: id,
      team_id: team_id,
      user_id: user_id
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + "update/" + `${id}`), body).pipe(map(res => res, {'headers': headers}));
  }
  deleteTeamMember(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + "delete/"+`${id}` ),{}).pipe(map(res => res, {'headers': headers}));
  }
}
