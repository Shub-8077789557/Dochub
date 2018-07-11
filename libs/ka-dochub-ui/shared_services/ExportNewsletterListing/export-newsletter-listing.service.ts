import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHandler,
  HttpEvent,
  HttpRequest
} from '@angular/common/http';
import { Configuration } from './../../config';

@Injectable()
export class ExportNewsletterListingService {

  requestUrl;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.requestUrl = configuration.Endpoint + 'newsletter/Newsletters';
  }

  ExportNewsletterListing() {
    const req = new HttpRequest('GET', this.requestUrl);
    return this.http.request(req);
  }

}
