import { Injectable } from '@angular/core';
import { AppService } from '../app/app.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventRegistrationService {
  readonly baseUrl = 'eventRegistration/';
  constructor(private http: HttpClient, private app: AppService) { }

  createEventRegistration(event_id: String, id: String, registration_type: String) {
    let data = {};
    if (registration_type == 'Team') {
      data = {
        event_id: event_id,
        team_id: id,
        registration_type: registration_type
      }
    }
    else {
      data = {
        event_id: event_id,
        user_id: id,
        registration_type: registration_type
      }
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'newWorkshopRegistration'), data).pipe(map(res => res, { 'headers': headers }));
  }

  checkRegistration(user_id: string, event_id: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl)+'checkRegistration/' + event_id+"/"+user_id );
  }
  // readParticipationStatus(page: any) {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get(this.app.getUrl(this.baseUrl)+"?page="+page);
  // }
  // updateParticipationStatus(id: String, name: String,score: String) {
  //   const body = { _id: id , name: name,score: score };
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.put(this.app.getUrl(this.baseUrl + `${id}`), body).pipe(map(res => res, {'headers': headers}));
  // }
  // deleteParticipationStatus(id: String) {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.delete(this.app.getUrl(this.baseUrl + `${id}` ) ).pipe(map(res => res, {'headers': headers}));
  // }
}
