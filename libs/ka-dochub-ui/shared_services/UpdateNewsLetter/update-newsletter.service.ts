import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Configuration } from '../../config';

@Injectable()
export class UpdateNewsletterService {
Upadate_Url:string;

constructor( private _http: HttpClient,
  private _configuration: Configuration) {
    this.Upadate_Url = _configuration.Endpoint + 'newsletter/updatenewsletter';

   }

   Update(UpdateNewsletter)
   {
    const req = new HttpRequest('PUT', this.Upadate_Url, UpdateNewsletter);
    console.log(req);
    return this._http.request(req);
   }

}
