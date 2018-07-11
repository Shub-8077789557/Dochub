import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Configuration } from '../../config';
@Injectable()
export class NewslistingService {
  Newslist_Url: string;
  Newslist: any;
  constructor( private http: HttpClient,
    private configuration: Configuration) { 
      this.Newslist_Url = configuration.Endpoint + 'newsletter/usernewsletter';
    }

    ListingNewsLetter(Newslist) {
      const req = new HttpRequest('POST', this.Newslist_Url, Newslist);
      console.log(Newslist);
      return this.http.request(req);
      
    }
}
