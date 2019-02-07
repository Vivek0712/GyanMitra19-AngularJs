import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NodeStringDecoder } from 'string_decoder';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseUrl = 'users/';
  constructor(private http: HttpClient, private app: AppService) { }

  // createCollege (name: String, locale: String ) {
  //   const body = { name: name ,locale : locale};
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  // }

  forgotPassword(email_id: string) {
    const body = { email_id: email_id };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'forgotPassword'), body).pipe(map(res => res, { 'headers': headers }));
  }

  resetPassword(email_id: string, password: string, token: string) {
    const body = {
      email_id: email_id,
      token: token,
      password: password
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'resetPassword'), body).pipe(map(res => res, { 'headers': headers }));
  }

  refreshUser() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl('users/refreshUser/') + JSON.parse(localStorage.getItem('user')).id);
  }

  confirmPayment(_id: string) {
    const body = { _id: _id };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'confirmPayment'), body).pipe(map(res => res, { 'headers': headers }));
  }

  confirmPaymentOffline(_id: string, event_id: String) {
    const body = { _id: _id, event_id: event_id };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'confirmPaymentOffline'), body).pipe(map(res => res, { 'headers': headers }));
  }

  getAllParticipants() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'participants');
  }

  getActivatedParticipants() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'participantsActivated');
  }

  confirmDD(id: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(this.app.getUrl(this.baseUrl) + 'uploadCartDDImage/' + id, {});
  }

  confirmCart(_id) {
    let data = {
      user_id: _id
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'confirmCart'), data).pipe(map(res => res, { 'headers': headers }));
  }

  getParticpants(page: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'participants/?page=' + page);
  }

  getParticipant(_id: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'participants/search/?id=' + _id);
  }

  isCartConfirmed(_id: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'isCartConfirmed/' + _id);
  }

  createUser(values: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), values).pipe(map(res => res, { 'headers': headers }));
  }
  deleteUser(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + "delete/" + `${id}`), {}).pipe(map(res => res, { 'headers': headers }));
  }
  getAdmin() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + '/admin');
  }

  updateUser(values: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'update/' + values._id), values).pipe(map(res => res, { 'headers': headers }));
  }

}
