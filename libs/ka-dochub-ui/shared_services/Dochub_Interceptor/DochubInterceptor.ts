import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpResponse,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class DochubInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req.headers.append('Content-Type', 'application/json');
      console.log(req);
    return next.handle(req);
  }
}
