import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Configuration } from '../../config';

@Injectable()
export class TemplateViewService {

  viewTemplateUrl: string;

  constructor(private _http: HttpClient, private _configuration: Configuration) {

    this.viewTemplateUrl = _configuration.Endpoint + 'newslettertemplate/viewtemplate';
  }

  viewTemplate(Newsletter) {
    const req = new HttpRequest('POST', this.viewTemplateUrl, Newsletter);
    console.log(Newsletter);
    return this._http.request(req);
  }

}
