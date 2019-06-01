import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user/services/user.service";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {first} from "rxjs/internal/operators/first";
import {LoginUser} from "../models/loginUser.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = 'Error';
  user: LoginUser = {
    username: "",
    password: ""
  };

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService){
  }

  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });

    this.userService.logout();

  }

  public onSubmit(form: NgForm) {
    this.user.username = form.value.username;
    this.user.password = form.value.password;
    this.submitted = true;
    this.loading = true;
    console.log(this.user.username);
    console.log(this.user.password);
    this.userService.login(this.user).subscribe(
      result => {
        if (result) {
          this.router.navigate(['/dashboard']);
        }
        },
        error=>{
          this.router.navigate(['/login']);
        });
  }

}
