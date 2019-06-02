import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {LoginUser} from "../models/loginUser.model";
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  error = 'Error';
  user: LoginUser = {};

  constructor(private router: Router,
              private authService: LoginService){
  }

  ngOnInit() {
    this.submitted = false;
    localStorage.removeItem('currentUser');
  }

  public onSubmit(form: NgForm) {
    this.user.username = form.value.username;
    this.user.password = form.value.password;
    // console.log(this.user.username);
    // console.log(this.user.password);
    this.authService.login(this.user).subscribe(
      result => {
        console.log(result);
          if (result.length != 0) {
            this.router.navigate(['/dashboard']);
          }
          else{
            this.submitted = true;
          }
        },
        error=>{
          alert(this.error);
        });
  }

}
