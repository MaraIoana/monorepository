import {Injectable} from '@angular/core';
import {BackendService} from "./backend.service";
import {Observable} from "rxjs";
import {addUser} from "../../models/addUser.model";
import {Url} from "url";
import {RestUser} from "../../models/restUser.models";

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = false;

  constructor(private backendService: BackendService, private http: HttpClient) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  public getAllUsers(): Observable<addUser[]> {
    //return this.backendService.get('jbugs/jbugs-api/users');
    //return this.backendService.get('localhost:8080/jbugs/jbugs-api/users');
    return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users');
  }

  public updateUser(user:RestUser){
    return this.backendService.put('http://localhost:8080/jbugs/jbugs-api/users', user);
  }



  public addUser(user: addUser){
    return this.backendService.post('http://localhost:8080/jbugs/jbugs-api/users',user);
  }

  public getUser(userName: string){
    var urlGet : Url
    urlGet = 'http://localhost:8080/jbugs/jbugs-api/users/getUser/'+ userName;
    //return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users/getUser/',userName);
    return this.backendService.get(urlGet);
  }

  // public login(username, password){
  //   return this.backendService.post('http://localhost:8080/jbugs/jbugs-api/users', {username, password})
  //     .pipe(map(user => {
  //       if(user && user.token){
  //         localStorage.setItem('currentUser', user.token);
  //         this.loggedIn = true;
  //       }
  //       return user.succes;
  //     }));
  // }

  public isLoggedIn(){
    return this.loggedIn;
  }

}

