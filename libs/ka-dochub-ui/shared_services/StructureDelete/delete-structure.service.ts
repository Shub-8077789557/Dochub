import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import {Configuration} from './../../config';
@Injectable()
export class DeleteStructureService {
   StructureDel_Url:any;
   _id:any;
  constructor(private http:HttpClient,
  private configuration : Configuration) {
    this.StructureDel_Url = configuration.Endpoint + 'newsletterstructure/deletestructure';
   }

   DeleteStructure(_id){
    const req = new HttpRequest('POST', this.StructureDel_Url, _id);
    return this.http.request(req);
   }

}
