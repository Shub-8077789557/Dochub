import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Configuration } from '../../config';
@Injectable()
export class UserRegisterService {
  Request_Url: string;
  user: any;
  constructor(
    private _http: HttpClient,
    private _configuration: Configuration
  ) {
    this.Request_Url = _configuration.Endpoint + 'users/register';
  }

  StoreUser(user) {
    console.log(user);
    const req = new HttpRequest('POST', this.Request_Url, user);
    console.log(user);
    return this._http.request(req);
  }
}
