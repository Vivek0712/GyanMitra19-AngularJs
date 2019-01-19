import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipationstatusService {
  readonly baseUrl = 'participationstatus/';
  constructor(private http: HttpClient, private app: AppService) { }
  createParticipationStatus (name: String,score: String) {
    const body = { 
      name: name,
      score: score
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }
  readParticipationStatus(page: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl)+"?page="+page);
  }
  updateParticipationStatus(id: String, name: String,score: String) {
    const body = { _id: id , name: name,score: score };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + "update/"+`${id}`), body).pipe(map(res => res, {'headers': headers}));
  }
  deleteParticipationStatus(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + "delete/"+`${id}` ),{} ).pipe(map(res => res, {'headers': headers}));
  }
}
