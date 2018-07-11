import { Injectable } from '@angular/core';
import {
   HttpClient,
   HttpHandler,
   HttpEvent,
   HttpRequest
} from '@angular/common/http';
import {Configuration} from './../../config'
@Injectable()
export class DuplicateTemplateService {
   DupliacteTemp_Url:any;
   _id:any; 
  constructor(private http:HttpClient,
  private configuration : Configuration) { 
    this.DupliacteTemp_Url = configuration.Endpoint + 'newslettertemplate/duplicatetemplate';
  }

  DuplicateTemplate(_id){
   const req = new HttpRequest("POST", this.DupliacteTemp_Url, _id);
   return this.http.request(req);
  }

}
