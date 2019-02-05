import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app/app.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient, private app: AppService, private paymentService: PaymentService) { }
  readonly baseUrl = 'payment/';

  genAccHash(data: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'getAccHash'), data).pipe(map(res => res, { 'headers': headers }));
  }

  genHash(data: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'getHash'), data).pipe(map(res => res, { 'headers': headers }));
  }

  getPaymentDetails() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'payedUsers/');
  }

  calculateTotalAmount(user_id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl) + 'calculateTotalAmount/' + user_id);
  }

}
