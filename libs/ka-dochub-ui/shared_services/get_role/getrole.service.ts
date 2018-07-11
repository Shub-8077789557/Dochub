import { Injectable } from '@angular/core';

@Injectable()
export class GetroleService {

  constructor() { }

  checkrole() {
    let role: any;
    role = sessionStorage.getItem('userrole');
    return { role: JSON.parse(role) };
  }


}
