import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app/app.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProbsService {
  readonly baseUrl = 'problem/';
  constructor(private http: HttpClient, private app: AppService) { }
  createProb (name: String) {
    const body = { 
      name: name
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }
  
  resolveProblem(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + "resolve/"+`${id}` ),{} ).pipe(map(res => res, {'headers': headers}));
  }
  readProb() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl));
  }
}
