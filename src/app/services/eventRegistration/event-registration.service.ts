import { Injectable } from '@angular/core';
import { AppService } from '../app/app.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ParticipantstatusComponent } from 'src/app/component/admin/participantstatus/participantstatus.component';
import { ParticipationstatusService } from '../participationstatus/participationstatus.service';

@Injectable({
  providedIn: 'root'
})
export class EventRegistrationService {
  readonly baseUrl = 'eventRegistration/';
  constructor(private http: HttpClient, private app: AppService) { }

  createEventRegistration(event_id: String, email_id: String, participation:String) {
    let data = {
        event_id: event_id,
        email_id:email_id,
        registration_type: "Single",
        participation: participation
      }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'newEventRegistration'), data).pipe(map(res => res, { 'headers': headers }));
  }

  createEventWithTeamRegistration(event_id: String, team_id: String,id:String, participation: String) {
    let data = {
        event_id: event_id,
        team_id: team_id,
        user_id: id,
        registration_type: "Team",
        participation: participation
      }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'newEventRegistration'), data).pipe(map(res => res, { 'headers': headers }));
  }

  createWorkshopRegistration(event_id: String, id: String) {
    let data = {
      event_id: event_id,
      user_id: id,
      registration_type: 'Single'
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'newWorkshopRegistration'), data).pipe(map(res => res, { 'headers': headers }));

  }

  checkWorkshopRegistration(user_id: String, event_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'checkRegistration/' + user_id + "/" + event_id);
  }

  checkEventRegistration(user_id: String, event_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'checkEventRegistration/' + event_id + "/" + user_id);
  }

  getWorkshops(user_id: String){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + user_id + "/Workshop");
  }

  getEvents(event_id: String){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + "events/" + event_id);
  }

  cancelWorkshopRegistration(_id: String){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.app.getUrl(this.baseUrl) + _id);
  }

  cancelEventRegistration(_id: String){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.app.getUrl(this.baseUrl) + _id);
  }

  getUserByEmail(email_id: String){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + email_id);
  }

  updateAttendance(id:String,participation:String) {
    const body = { 
      participation:participation
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.app.getUrl(this.baseUrl + `${id}`), body).pipe(map(res => res, {'headers': headers}));
  }

}
