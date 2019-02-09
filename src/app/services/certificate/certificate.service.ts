import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';

@Injectable({
  providedIn: 'root'
})

export class CertificateService {
  readonly baseUrl = 'certificate/';
  constructor(private http: HttpClient, private app: AppService) { }

  newCertificate() {
    const body = {};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, { 'headers': headers }));
  }

  writeCertificate(id: any) {
    const body = { id: id };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'writeCertificate'), body).pipe(map(res => res, { 'headers': headers }));
  }

  issueCertificate(qr_code: any) {
    const body = { qr_code: qr_code };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'issueCertificate'), body).pipe(map(res => res, { 'headers': headers }));
  }

  loadCertificates(event_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl+event_id));
  }
}
