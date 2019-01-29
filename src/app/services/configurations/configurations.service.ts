import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {

  readonly baseUrl = 'config/';
  constructor(private http: HttpClient, private app: AppService) { }
  createConfig(name: String,value:Boolean) {
    const body = { name: name ,value: value};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }
  readConfig() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl));
  }

  getConfig(config: string){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl)+'getStatus/'+config);
  }

  updateConfig(id: String, name: String,value: Boolean) {
    const body = { _id: id , name: name , value: value};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + "update/" + `${id}`), body).pipe(map(res => res, {'headers': headers}));
  }
  deleteConfig(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + "delete/" + `${id}` ),{} ).pipe(map(res => res, {'headers': headers}));
  }
}
