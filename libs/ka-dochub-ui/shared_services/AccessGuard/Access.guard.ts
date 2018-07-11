import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      (this.authService.chectoken().token !== null)) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

// if (
//   (this.authService.checkrole().token !== null &&
//     this.authService.checkrole().role === 'admin') ||
//   this.authService.checkrole().role === 'user'
// ) {
//   return true;
// } else {
//   this.router.navigate(['/login']);
//   return false;
// }