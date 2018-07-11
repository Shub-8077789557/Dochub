import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Configuration } from '../../config';

@Injectable()
export class NewsletterupdateService {
  Update_Url: string;
  Newsletter: any;
  constructor(private _http: HttpClient,
    private _configuration: Configuration) 
    {
      this.Update_Url = _configuration.Endpoint + 'newsletter/updatenewsletter';
     }

     UpdateNewsLetter(Newsletter) {
      const req = new HttpRequest('PUT', this.Update_Url, Newsletter);
      console.log(Newsletter);
      return this._http.request(req);
      
    }

}
