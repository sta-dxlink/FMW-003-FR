import { Injectable, NgZone } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  user_status: boolean = false;

  constructor(
    private authService: AuthService,
    private route: Router,
    private zone: NgZone
  ) {}
  canActivate() {
    return this.checkUserAccess();
  }

  checkUserAccess() {
    return this.authService.getUserDetails().pipe(
      map((data) => {
        if (data.first_name) {
          this.user_status = true;
          return true;
        } else {
          this.route.navigate(['']);
          this.user_status = false;
          return false;
        }
      })
    );
  }
}
