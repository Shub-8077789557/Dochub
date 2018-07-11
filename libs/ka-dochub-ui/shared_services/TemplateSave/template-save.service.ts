import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Configuration } from '../../config';

@Injectable()
export class TemplateSaveService {
  templatesave_Url: string;
  Template: any;
  constructor(private _http: HttpClient,
    private _configuration: Configuration)
     {
      this.templatesave_Url = _configuration.Endpoint + 'newslettertemplate/savetemplate';
     }

     TemplateSave(Template) {
      const req = new HttpRequest('POST', this.templatesave_Url, Template);
      return this._http.request(req);
      
    }

}
