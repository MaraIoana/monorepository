import { Injectable } from '@angular/core';
import {LoginUser} from "../../models/loginUser.model";
import {BackendService} from "../../user/services/backend.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = false;

  constructor(private backendService: BackendService,
              private router: Router) { }

  public login(user: LoginUser):Observable<any> {
    return this.backendService.post('http://localhost:8080/jbugs/login/auth', user);
    //this.loggedIn = true;
  }

  public logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }

}
