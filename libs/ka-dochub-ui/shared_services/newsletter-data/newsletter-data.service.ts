import { Injectable } from '@angular/core';
import { Configuration } from '../../config';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class NewsletterDataService {
  newsdata_URL: string;
  userid : number;
  constructor(private _http: HttpClient,
    private _configuration: Configuration) {
      this.newsdata_URL = this._configuration.Endpoint + 'newsletter/usernewsletter';
     }

     Data(userid){
      const req = new HttpRequest('POST', this.newsdata_URL,userid);
      console.log(req);
      return this._http.request(req);
     }

}
