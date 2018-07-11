import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import {Configuration} from './../../config';
@Injectable()
export class StructurelistService {
    Structurelist_Url : any;
  constructor(private http : HttpClient, private configuration : Configuration) { 
    this.Structurelist_Url = this.configuration.Endpoint + 'newsletterstructure/structures';
  }

  Structurelist(){
    const req = new HttpRequest("GET",this.Structurelist_Url);
    return this.http.request(req);
  }

}
