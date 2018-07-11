import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Configuration } from '../../config';

@Injectable()
export class TemplateUpdateService {

  Update_Url: string;
  Newsletter: any;

  constructor(private _http: HttpClient, private _configuration: Configuration) {

    this.Update_Url = _configuration.Endpoint + 'newslettertemplate/updatetemplate';
  }

  updateTemplate(bodyParams) {
    const req = new HttpRequest('PUT', this.Update_Url, bodyParams);
    console.log(bodyParams);
    return this._http.request(req);
  }

}
