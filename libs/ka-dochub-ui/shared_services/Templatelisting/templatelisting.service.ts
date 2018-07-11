import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Configuration } from '../../config';
@Injectable()
export class TemplatelistingService {
  Request_Url: string;
  Newsletter: any;
  constructor(  private _http: HttpClient,
    private _configuration: Configuration
  ) { 
    this.Request_Url = _configuration.Endpoint + 'newslettertemplate/templates';
  }

  Templatelist() {
    const req = new HttpRequest('GET', this.Request_Url);
    return this._http.request(req);
    
  }
}
