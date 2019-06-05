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

  public updateBug(bug: Bug) {
    return this.backendService.put('http://localhost:8080/jbugs/jbugs-api/bugs/edit', bug);
  }

  public addBug(bug: Bug) {
    return this.backendService.post('http://localhost:8080/jbugs/jbugs-api/bugs', bug);
  }

  public modifyStatus(b: Bug): Observable<Bug[]> {
    console.log(b);
    return this.backendService.put('http://localhost:8080/jbugs/jbugs-api/bugs', {
      'id': b.id,
      'status': b.status,
      'severity': b.severity
    });
  }
}
