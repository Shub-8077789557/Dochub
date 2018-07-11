import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Configuration } from '../../config';
@Injectable()
export class StructureSaveService {
  structuresave_Url: string;
  Structure: any;
  constructor(private _http: HttpClient,
    private _configuration: Configuration)
     {
      this.structuresave_Url = _configuration.Endpoint + 'newsletterstructure/savestructure';
     }
   
     StructureSave(Structure) {
      const req = new HttpRequest('POST', this.structuresave_Url, Structure);
      return this._http.request(req);
      
    }

}
