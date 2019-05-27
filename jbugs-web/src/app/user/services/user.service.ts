import {Injectable} from '@angular/core';
import {BackendService} from "./backend.service";
import {Observable} from "rxjs";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backendService: BackendService) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users');
  }
}

