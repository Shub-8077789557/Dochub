import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHandler,
    HttpEvent,
    HttpRequest
} from '@angular/common/http';
import {Configuration} from './../../config';
@Injectable()
export class EditStructureService {
    EditStructure_Url : string;
    Structure:string;
  constructor(private http: HttpClient,
  private configuration : Configuration) {
    this.EditStructure_Url = configuration.Endpoint + 'newsletterstructure/updatestructure';
   }

   EditStructure(Strcuture){
     const req = new HttpRequest("PUT", this.EditStructure_Url, Strcuture);
     return this.http.request(req);
   }
}
