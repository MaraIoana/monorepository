import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PermissionService} from "../role/services/permission.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private permissionService: PermissionService) {
  }

  ngOnInit() {

  }

  login(x) {
    //todo When session is ready here you should set the permissions on the active session.
    let username = x.control.controls.username.value;
    this.permissionService.getUserPermissions(username).subscribe(data => {
      if (data.message)
        document.getElementById("loginMessage").innerHTML = data.message;
      else
        this.router.navigateByUrl("/dashboard", {state: {permissions: data.permissions}});
    })
  }
}
