import {Injectable} from '@angular/core';
import {BackendService} from "./backend.service";
import {Observable} from "rxjs";
import {Bug} from "../../models/bug.model";

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private backendService: BackendService) {
  }

  public getAllBugs(): Observable<Bug[]> {
    return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/bugs');
  }
}
