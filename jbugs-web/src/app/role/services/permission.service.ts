import { Injectable } from '@angular/core';
import {BackendService} from "../../user/services/backend.service";
import {Observable} from "rxjs";
import {Permission} from "../../models/permission.model";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private baseUrl:string = 'http://localhost:8080/jbugs/jbugs-api';

  constructor(private backendService:BackendService) { }

  public getPermissions(): Observable<Permission[]> {
    return this.backendService.get(this.baseUrl + '/permissions');
  }
}
