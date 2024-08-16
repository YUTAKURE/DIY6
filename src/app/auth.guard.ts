import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userName = localStorage.getItem('userName');
    const password = localStorage.getItem('password');

    if (userName && password) {
      return true;
    } else {
      this.router.navigate(['/secret/child-b']);
      return false;
    }
  }
}
