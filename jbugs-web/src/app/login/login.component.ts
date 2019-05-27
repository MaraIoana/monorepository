import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {

  }



  public onSubmit(x) {
    console.log(x);
    /*
    this.userService.login(username, password)
      .subscribe((result)=>{
        if(result){
          this.router.navigate(['/dashboard']);
        }
      });
    */

    this.router.navigate(['/dashboard'])
  }

}
