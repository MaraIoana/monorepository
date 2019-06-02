import {Injectable} from "@angular/core";

import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

import {Observable} from "rxjs";
import {UserService} from "./user/services/user.service";


@Injectable({

  providedIn: 'root',

})

export class LoggedInGuard implements CanActivate {


  constructor(private userService: UserService, private router: Router) {

  }


  /**

   * Check if we have a valid auth token

   * @param next

   * @param state

   */

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


    //ToDo if authService.isLoggedIn && hasRoles(user)
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }

  }

}
