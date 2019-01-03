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
    return this.http.post(this.app.getUrl(this.baseUrl + 'newEventRegistration'), data).pipe(map(res => res, { 'headers': headers }));
  }

  newWorkshopRegistration(event_id: String, id: String) {
    let data = {
      event_id: event_id,
      user_id: id,
      registration_type: 'Single'
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'newWorkshopRegistration'), data).pipe(map(res => res, { 'headers': headers }));

  }

  checkWorkshopRegistration(user_id: string, event_id: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'checkWorkshopRegistration/' + user_id + "/" + event_id);
  }

  getWorkshops(user_id: string){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + user_id + "/Workshop");
  }

  cancelWorkshopRegistration(_id: string){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.app.getUrl(this.baseUrl) + _id);
  }
}
