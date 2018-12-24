import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  readonly baseUrl = 'college/';
  constructor(private http: HttpClient, private app: AppService) { }
  createCollege (name: String, locale: String ) {
    const body = { name: name ,locale : locale};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }
  readCollege() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl));
  }
  updateCollege(id: String, name: String,locale: String) {
    const body = { _id: id , name: name, locale: locale };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.app.getUrl(this.baseUrl + `${id}`), body).pipe(map(res => res, {'headers': headers}));
  }
  deleteCollege(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.app.getUrl(this.baseUrl + `${id}` ) ).pipe(map(res => res, {'headers': headers}));
  }
}
