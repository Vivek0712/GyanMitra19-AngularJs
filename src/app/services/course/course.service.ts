import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';

// CRUD Service for Course
// Created by Aravind Raj
// 23/12/18


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  readonly baseUrl = 'course/';
  constructor(private http: HttpClient, private app: AppService) { }
  createCourse (name: String) {
    const body = { name: name };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }
  readCourse(page: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl)+"?page="+page);
  }
  updateCourse(id: String, name: String) {
    const body = { _id: id , name: name };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl +"update/" + `${id}`), body).pipe(map(res => res, {'headers': headers}));
  }
  deleteCourse(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + "delete/" + `${id}` ),{} ).pipe(map(res => res, {'headers': headers}));
  }


}
