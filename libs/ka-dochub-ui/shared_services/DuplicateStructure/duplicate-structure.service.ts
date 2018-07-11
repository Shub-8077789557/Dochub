import { Injectable } from '@angular/core';
import {
   HttpClient,
   HttpHandler,
   HttpEvent,
   HttpRequest
} from '@angular/common/http';
import {Configuration} from './../../config';
@Injectable()
export class DuplicateStructureService {
    DuplicateStruc_Url:any;
    _id:any;
  constructor(private http: HttpClient,
  private configuration : Configuration) { 
    this.DuplicateStruc_Url = configuration.Endpoint + 'newsletterstructure/duplicatstructure';
  }

  DuplicateStructure(_id){
    const req = new HttpRequest("POST", this.DuplicateStruc_Url, _id);
    return this.http.request(req);
  }
}
