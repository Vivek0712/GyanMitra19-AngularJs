import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app/app.service';

// CRUD Service for Accomodation
// Created by Aravind Raj
// 23/12/18

@Injectable({
  providedIn: 'root'
})
export class AccomodationService {

  readonly baseUrl = 'accommodation/';
  constructor(private http: HttpClient, private app: AppService) { }
  createAccomodation (acc_transaction_id: String,acc_mode_of_payment: String,acc_days: String,acc_file_name: String,acc_payment_status: String,acc_status: String,user_id: String,acc_amount: String) {
    const body = { 
      acc_transaction_id: acc_transaction_id,
      acc_mode_of_payment: acc_mode_of_payment,
      acc_days: acc_days,
      acc_file_name: acc_file_name,
      acc_payment_status: acc_payment_status,
      acc_status: acc_status,
      user_id: user_id,
      acc_amount: acc_amount
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
  }

  populateAccomodation(){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl)+'populate');
  }

  confirmAccomodation(id: string){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'confirmAccommodation/'+id),{}).pipe(map(res => res, {'headers': headers}));
  }

  approveAccomodation(id: string){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'approveAccommodation/'+id),{}).pipe(map(res => res, {'headers': headers}));
  }

  deproveAccomodation(id: string){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'deproveAccommodation/'+id),{}).pipe(map(res => res, {'headers': headers}));
  }

  refusePayment(id: string){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + 'refusePayment/'+id),{}).pipe(map(res => res, {'headers': headers}));
  }

  readAccomodation() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl));
  }

  getAccomodation(id: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl)+'getAccomodation/'+id);
  }

  uploadFile(formData: FormData) {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(this.app.getUrl(this.baseUrl) + 'uploadImage/'+formData.get('id'), formData);
  }

  confirmDDPayment(id: any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.app.getUrl(this.baseUrl)+'confirmDDUser/'+id);
  }

  updateAccomodation(id: String, acc_transaction_id: String,acc_mode_of_payment: String,acc_days: String,acc_file_name: String,acc_payment_status: String,acc_status: String,user_id: String,acc_amount: String) {
    const body = { 
      _id: id,
      acc_transaction_id: acc_transaction_id,
      acc_mode_of_payment: acc_mode_of_payment,
      acc_days: acc_days,
      acc_file_name: acc_file_name,
      acc_payment_status: acc_payment_status,
      acc_status: acc_status,
      user_id: user_id,
      acc_amount: acc_amount
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl + `${id}`), body).pipe(map(res => res, {'headers': headers}));
  }
  
  deleteAccomodation(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.app.getUrl(this.baseUrl +'delete/'+ `${id}` ),{} ).pipe(map(res => res, {'headers': headers}));
  }
}
