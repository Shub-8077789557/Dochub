import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Configuration } from '../../config';
@Injectable()
export class RoleService {
  Request_Url: string;
  user: any;
  constructor(
    private _http: HttpClient,
    private _configuration: Configuration
  ) {
    this.Request_Url = _configuration.Endpoint + 'getrole/role';
  }

  getroles(){
    const req = new HttpRequest('GET', this.Request_Url);
    console.log(req);
    return this._http.request(req);
  }


}
