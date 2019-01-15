import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';
@Injectable({
  providedIn: 'root'
})
export class YearService {
  readonly baseUrl = 'year/';
  constructor(private http: HttpClient, private app: AppService) { }
  createYear (name: String) {
    const body = { name: name };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }
  readYear(page: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl)+"?page="+page);
  }
  updateYear(id: String, name: String) {
    const body = { _id: id , name: name };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + "update/"+`${id}`), body).pipe(map(res => res, {'headers': headers}));
  }
  deleteYear(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl +"delete/"+ `${id}` ),{}).pipe(map(res => res, {'headers': headers}));
  }


}
