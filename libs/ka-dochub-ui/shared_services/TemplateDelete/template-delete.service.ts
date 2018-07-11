import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Configuration } from '../../config';
@Injectable()
export class TemplateDeleteService {
  TempDelete_Url: string;
  Newsletter: any;
  constructor(private _http: HttpClient,
    private _configuration: Configuration)
     { 
      this.TempDelete_Url = _configuration.Endpoint + 'newslettertemplate/deletetemplate'; 
    }

    DeleteTemplate(_id){
      const req = new HttpRequest('POST', this.TempDelete_Url,_id);
      console.log(req);
      return this._http.request(req);
    }

}
