import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app/app.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient,private appService:AppService,private paymentService:PaymentService) { }
  readonly baseUrl = 'payment/';
  genHash() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
  }
}
