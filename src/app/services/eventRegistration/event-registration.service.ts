import { Injectable } from '@angular/core';
import { AppService } from '../app/app.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ParticipantstatusComponent } from 'src/app/component/admin/participantstatus/participantstatus.component';
import { ParticipationstatusService } from '../participationstatus/participationstatus.service';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class EventRegistrationService {
  readonly baseUrl = 'eventRegistration/';
  constructor(private http: HttpClient, private app: AppService) { }

  createEventRegistration(user_id: String, event_id: String) {
    let data = {
      event_id: event_id,
      user_id: user_id,
      registration_type: "Single"
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'newEventRegistration'), data).pipe(map(res => res, { 'headers': headers }));
  }

  createEventRegistrationOffline(user_id: String, event_id: String, participation: String) {
    let data = {
      event_id: event_id,
      user_id: user_id,
      registration_type: "Single",
      participation: participation,
      status: "Paid"
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'newEventRegistrationOffline'), data).pipe(map(res => res, { 'headers': headers }));
  }

  createEventWithTeamRegistration(user_id: String, event_id: String, name: String, position: String) {
    let data = {
      user_id: user_id,
      event_id: event_id,
      name: name,
      position: position
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'newTeamEventRegistration'), data).pipe(map(res => res, { 'headers': headers }));
  }

  getRegisteredEvents(user_id: string, type: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'registeredEvents/' + user_id + '/' + type);
  }

  getGyanMates() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'getGyanMates');
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

  getPendingDDConfirmation() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'checkPendingDDConfirmation/');
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

  getUserWorkshops(user_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'userRegisteredEvents/' + user_id + "/Workshop");
  }

  getUserEvents(user_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'userRegisteredEvents/' + user_id + "/Event");
  }
  refusePayment(user_id: String) {
    let data = {
      user_id: user_id
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'refuseCartPayment'), data).pipe(map(res => res, { 'headers': headers }));
  }

  confirmPayment(user_id: String) {
    let data = {
      user_id: user_id
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'confirmCartPayment'), data).pipe(map(res => res, { 'headers': headers }));
  }

  checkRegistration(event_id: string, user_id: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + '/checkRegistration/' + event_id + '/' + user_id);
  }

  getUnconfirmedDDPayments() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + '/getUnconfirmedDDPayments');
  }

  getEvents(event_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + "events/" + event_id);
  }

  cancelWorkshopRegistration(_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl) + _id, {});
  }

  cancelEventRegistration(_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl) + 'delete/' + _id, {});
  }

  getUserByEmail(email_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + email_id);
  }

  updateAttendance(id: String, participation: String) {
    const body = {
      participation: participation
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + "update/" + `${id}`), body).pipe(map(res => res, { 'headers': headers }));
  }
  getCollegeMates(event_id: String, user_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'getCollegeMates/' + event_id + '/' + user_id);
  }

  getEventById(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'getEvent/' + id);
  }

  getCollegeUsers(college: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'getCollegeParticipant/' + college);
  }

  checkEventRegistrationStatus(user_id: String, event_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get(this.app.getUrl(this.baseUrl) + 'checkEventRegistrationStatus/' + event_id + '/' + user_id).subscribe((response: any) => {
      return response.registered;
    });
  }

}
