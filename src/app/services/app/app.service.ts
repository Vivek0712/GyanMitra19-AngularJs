import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class AppService {

  server = environment.backend.server;

  constructor() { }

  public getUrl(uri = '') {
    return `${this.server}/${uri}`;
  }
  public getKey() {
    return environment.payment.key;
  }
  public getSalt() {
    return environment.payment.salt;
  }
  public getPaymentUrl() {
    return environment.payment.url;
  }
  public getAccomodationAmount() {
    return environment.payment.accomodation;
  }
  public getTransactionFee() {
    return environment.payment.transcationFee;
  }
  public getProductInfo() {
    return environment.payment.productInfo;
  }


}
