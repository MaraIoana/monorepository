import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermManagementGuard implements CanActivate {

  permissions:string[];

  constructor(private router:Router) {
    if (this.router.getCurrentNavigation().extras.replaceUrl) {
      this.router.navigateByUrl("/error", {state: {message:'Thats not cute!'}});
    } else {
      this.permissions = this.router.getCurrentNavigation().previousNavigation.extras.state.permissions;
    }
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.hasPermissionManagement();
  }

  hasPermissionManagement(){
    if(this.permissions.includes("PERMISSION_MANAGEMENT")){
      return true;
    }
    else {
      return false;
    }
  }
  
}
