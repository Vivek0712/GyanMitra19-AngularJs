import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authToken: any;
  user: any;
  constructor(private http: HttpClient, private app: AppService , private jwtHelper: JwtHelper, private router: Router) { }
  authenticate(email_id: string, password: string) {
    const body = { email_id: email_id, password: password };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl('auth/authenticate'), body).pipe(map(res => res, {'headers': headers}));
  }

  createSession(response) {
    localStorage.setItem('user', JSON.stringify(response.user));
    localStorage.setItem('token', response.token);
  }

  refreshSession(response: any){
    var tempuser = JSON.parse(localStorage.getItem('user'));
    tempuser["cart_confirmed"] = response.msg.cart_confirmed;
    tempuser["cart_paid"] = response.msg.cart_paid;
    tempuser["gmID"] = response.msg.gmID;
    localStorage.setItem('user', JSON.stringify(tempuser));
  }
  
  destroySession() {
    localStorage.clear();
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      if (this.jwtHelper.isTokenExpired(token)) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  getCurrentUser()  {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.http.get(this.app.getUrl('auth/profile'), httpOptions).pipe(map(res => res));
  }

  getCurrentUserId() {
    if (this.isLoggedIn()) {
      const user = localStorage.getItem('user');
      return JSON.parse(user).id;
    } else {
      return false;
    }
  }
  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }
  getUserType() {
    if (this.isLoggedIn()) {
      const user = localStorage.getItem('user');
      return JSON.parse(user).type;
    } else {
      return false;
    }
  }
  isAdmin() {
    if ( this.isLoggedIn() ) {
      const user = localStorage.getItem('user');
      const type = JSON.parse(user).type;
      if (type === 'admin') {
        return true;
      } else {
        return false;
      }
    }
  }
}
