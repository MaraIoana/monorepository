import { Injectable } from '@angular/core';
import {LoginUser} from "../../models/loginUser.model";
import {map} from "rxjs/operators";
import {BackendService} from "../../user/services/backend.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = false;

  constructor(private backendService: BackendService,
              private router: Router) { }

  public login(user: LoginUser) {
    return this.backendService.post('http://localhost:8080/jbugs/jbugs-api/auth', user)
      .pipe(map(response => {
        if (response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
        }
        return response;
      }));
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  public isLoggedIn(){
    return this.loggedIn;
  }
}
