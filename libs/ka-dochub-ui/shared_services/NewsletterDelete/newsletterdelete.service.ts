import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Configuration } from '../../config';
@Injectable()
export class NewsletterdeleteService {
  Delete_Url: string;
  constructor(private http: HttpClient,
    private configuration: Configuration) { 
    this.Delete_Url = configuration.Endpoint + 'newsletter/deleteuserNewsLetter';
   
  }
DeleteNewsLetter(_id) {
  const req = new HttpRequest('POST', this.Delete_Url,_id);
  console.log(req);
  return this.http.request(req);
}

}
