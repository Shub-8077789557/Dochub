import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Configuration } from '../../config';
@Injectable()
export class NewsletterViewService {
  NewsletterView_Url: string;
  Newsletter: any;
  constructor(private _http: HttpClient,
    private _configuration: Configuration) { 
      this.NewsletterView_Url = _configuration.Endpoint + 'newsletter/viewnewsletter';
    }

    NewsLetterView(Newsletter) {
      const req = new HttpRequest('POST', this.NewsletterView_Url, Newsletter);
      console.log(req);
      return this._http.request(req);
      
    }


}
