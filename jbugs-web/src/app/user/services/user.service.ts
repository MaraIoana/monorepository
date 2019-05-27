import {Injectable} from '@angular/core';
import {BackendService} from "./backend.service";
import {Observable} from "rxjs";
import {addUser} from "../../models/addUser.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backendService: BackendService) {
  }

  public getAllUsers(): Observable<addUser[]> {
    //return this.backendService.get('jbugs/jbugs-api/users');
    //return this.backendService.get('localhost:8080/jbugs/jbugs-api/users');
    return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users');
  }

  public addUser(user: addUser){
    return this.backendService.post('http://localhost:8080/jbugs/jbugs-api/users',user, {responseType: 'text'});
  }
}

