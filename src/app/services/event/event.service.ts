import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, min } from 'rxjs/operators';
import { AppService } from '../app/app.service';



@Injectable({
  providedIn: 'root'
})

export class EventService {
  readonly baseUrl = 'event/';
  constructor(private http: HttpClient, private app: AppService) { }

  createEvent (title: String, category_id: String, department_id: String, description: String, image_name: String, rules: String, start_time: String, end_time: String, event_date: String, prelims: String, round_1: String, round_2: String, finals: String, min_members: Number, max_members: Number, max_limit: Number, contact_email: String, venue: String, amount: Number, allow_gender_mixing: Boolean ) {
    const body = {
      title: title,
      category_id: category_id,
      department_id: department_id,
      description: description,
      image_name: image_name,
      rules: rules,
      start_time: start_time,
      end_time: end_time,
      event_date: event_date,
      prelims: prelims,
      round_1: round_1,
      round_2: round_2,
      finals: finals,
      min_members: min_members,
      max_members: max_members,
      max_limit: max_limit,
      contact_email: contact_email,
      venue: venue,
      amount: amount,
      allow_gender_mixing: allow_gender_mixing
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }
  readEvent() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl));
  }

  uploadImage(image: Blob) {
    return this.http.post(this.app.getUrl(this.baseUrl)+'upload',image);
}

  updateEvent(id: String, title: String, category_id: String, department_id: String, description: String, image_name: String, rules: String, start_time: String, end_time: String, event_date: String, prelims: String, round_1: String, round_2: String, finals: String, min_members: Number, max_members: Number, max_limit: Number, contact_email: String, venue: String, amount: Number, allow_gender_mixing: Boolean) {
    const body = {
      title: title,
      category_id: category_id,
      department_id: department_id,
      description: description,
      image_name: image_name,
      rules: rules,
      start_time: start_time,
      end_time: end_time,
      prelims: prelims,
      round_1: round_1,
      round_2: round_2,
      finals: finals,
      min_members: min_members,
      max_members: max_members,
      max_limit: max_limit,
      contact_email: contact_email,
      venue: venue,
      amount: amount,
      allow_gender_mixing: allow_gender_mixing
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.app.getUrl(this.baseUrl + `${id}`), body).pipe(map(res => res, {'headers': headers}));
  }
  deleteEvent(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.app.getUrl(this.baseUrl + `${id}` ) ).pipe(map(res => res, {'headers': headers}));
  }
}

