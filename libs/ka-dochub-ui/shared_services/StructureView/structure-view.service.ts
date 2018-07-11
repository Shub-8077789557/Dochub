import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHandler,
  HttpEvent,
  HttpRequest
} from '@angular/common/http';
import {Configuration} from './../../config'
@Injectable()
export class StructureViewService {
   StructureView_Url : string;
   _id:string;
  constructor(private http: HttpClient,
  private configuration : Configuration) {
    this.StructureView_Url = configuration.Endpoint + 'newsletterstructure/viewstructure';
   }

   StructureView(_id){
     const req = new HttpRequest ("POST", this.StructureView_Url, _id);
     return this.http.request(req);
   }

}
