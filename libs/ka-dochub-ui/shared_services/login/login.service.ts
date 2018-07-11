import { Injectable } from '@angular/core';
import { Configuration } from '../../config';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {
  request_URL: string;
  user: any;
  authToken: any;
  id: any;
  role: string;
  constructor(
    private _htttp: HttpClient,
    private _configuration: Configuration
  ) {
    this.request_URL = this._configuration.Endpoint + 'users/authenticate';
  }

  login(user) {
    const req = new HttpRequest('POST', this.request_URL, user);
    console.log(this.request_URL);
    return this._htttp.request(req);
  }
  SetUser(token?, user?) {
    localStorage.setItem('id_token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('userrole', JSON.stringify(user.role));
    this.authToken = token;
    this.user = user;
    this.id = user.id;
    this.role = user.role;
    return { id: this.id, role: this.role };
  }

  chectoken() {
    let token: any;
    token = localStorage.getItem('id_token');
    return { token: token };
  }
  checkrole() {
    let role: any;
    role = sessionStorage.getItem('userrole');
    return { role: JSON.parse(role) };
  }

  getaccess() {
    let access: any;
    access = sessionStorage.getItem('userrole');
    return { role: JSON.parse(access) };
  }

  getUser() {
    let user: any;
    user = JSON.parse(sessionStorage.getItem('user'));
    return { user: user };
  }
}
