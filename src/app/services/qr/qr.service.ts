import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  readonly baseUrl = 'qr/';

  constructor(private http: HttpClient, private app: AppService) { }
  createMap (qrCode: String, user_id: String) {
    const body = { qr_code: qrCode, user_id: user_id };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'createMap'), body).pipe(map(res => res, {'headers': headers}));
  }

  markPresent(qrCode: String, event_id: String){
    const body = { qr_code: qrCode, event_id: event_id };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'markPresent'), body).pipe(map(res => res, {'headers': headers}));
  }
}
