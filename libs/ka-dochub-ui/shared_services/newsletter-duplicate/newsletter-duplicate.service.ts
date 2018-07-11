import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Configuration } from '../../config';

@Injectable()
export class NewsletterDuplicateService {
  Duplicate_Url: string;
  Newsletter: any;
  constructor( private _http: HttpClient,
    private _configuration: Configuration) {
      this.Duplicate_Url = _configuration.Endpoint + 'newsletter/duplicatenewsletter';
     }

     DuplicateNewsLetter(Newsletter) {
      const req = new HttpRequest('POST', this.Duplicate_Url, Newsletter);
      console.log(req);
      return this._http.request(req);
      
    }

}
