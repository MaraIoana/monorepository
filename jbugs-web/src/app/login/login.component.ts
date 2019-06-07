import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {LoginUser} from "../models/loginUser.model";
import {LoginService} from "./services/login.service";
import {PermissionService} from "../role/services/permission.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  user: LoginUser = {};

  constructor(private router: Router,
              private authService: LoginService,
              ){
  }

  ngOnInit() {
    this.submitted = false;
    this.authService.logout();
  }

  public onSubmit(form: NgForm) {
    this.user.username = form.value.username;
    this.user.password = form.value.password;

    this.authService.login(this.user).subscribe(
      result => {
          if(result.message){
            this.submitted = true;
            alert(result.message);
          }
          else {
            localStorage.setItem('auth_token', result.token);
            this.router.navigate(['/dashboard']);
            console.log(result);
          }
      });
  }



  // login(x) {
  //   //todo When session is ready here you should set the permissions on the active session.
  //   let username = x.control.controls.username.value;
  //   this.permissionService.getUserPermissions(username).subscribe(data =>{
  //   //     if(data.message)
  //   //       document.getElementById("loginMessage").innerHTML = data.message;
  //   //     else
  //       this.router.navigateByUrl("/dashboard",{state:{permissions:data.permissions}});
  //     })
  // }

}
