import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Configuration } from '../../config';

@Injectable()
export class NewsletterstoreService {
  Request_Url: string;
  Newsletter: any;
  constructor(
    private _http: HttpClient,
    private _configuration: Configuration
  ) {
    this.Request_Url = _configuration.Endpoint + 'newsletter/savenewsletter';
  }

  StoreNewsLetter(Newsletter) {
    const req = new HttpRequest('POST', this.Request_Url, Newsletter);
    console.log(Newsletter);
    return this._http.request(req);
    
  }
}
