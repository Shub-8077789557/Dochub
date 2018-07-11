import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../';
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private authService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const ExpectedUser= route.data.role;
    console.log(ExpectedUser);
    if (
      (this.authService.checkrole().role.role == null || this.authService.checkrole().role.role !== ExpectedUser )) {
        this.router.navigate(['/login']);
        return false;
    } else {
    return true;
  }
}
}

// if (
//     (this.authService.checkrole().role !== null)) {
//     return true;
//   } else {
//     this.router.navigate(['/login']);
//     return false;
//   }