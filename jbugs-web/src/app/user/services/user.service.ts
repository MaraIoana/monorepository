import {Injectable} from '@angular/core';
import {BackendService} from "./backend.service";
import {BehaviorSubject, Observable} from "rxjs";
import {addUser} from "../../models/addUser.model";
import {Url} from "url";
import {RestUser} from "../../models/restUser.models";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../../models/user.model";
import {LoginUser} from "../../models/loginUser.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = false;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private backendService: BackendService) {
    this.loggedIn = !!localStorage.getItem('currentUser');
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
    var urlGet : string
    urlGet = 'http://localhost:8080/jbugs/jbugs-api/users/getUser/'+ userName;
    //return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users/getUser/',userName);
    return this.backendService.get(urlGet);
  }


}

