import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RestUser} from '../../models/restUser.models';
import {NgForm} from '@angular/forms';
import {UsersComponent} from "../users/users.component";
import {UserService} from "../services/user.service";
import {User} from "../../models/user.model";




@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user: RestUser = {};
  public username: string;
  private sub: any;

   currenntUser: RestUser;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

  }

  submit(form: NgForm) {
    this.user.firstName = form.value.firstName;
    this.user.lastName = form.value.lastName;
    this.user.email = form.value.email;
    this.user.mobileNumber = form.value.mobileNumber;
    //only for test
    //todo remove this line
    //this.userService.updateUser(this.user);

    this.userService.updateUser(this.user).subscribe(

        result => console.log(result.username),
        error => {
          console.log(error)
        }
      );

  }

     ngOnInit() {

       this.activatedRoute.paramMap.subscribe(
         (params: ParamMap) => {
           this.username=params.get('userName');
         }
       );

       console.log(this.username);
       this.userService.getUser(this.username).subscribe((user) => {
         this.user = user;
       });
       //this.user.mobileNumber = "0040666666"
       //console.log(this.user.mobileNumber);




       //this.user = this.userComponent.currentUser;
       console.log("currentUser get from ...:");
      /* this.sub = this. activatedRoute.params.subscribe(params => {
         this.id = +params['id'];*/
       //console.log(this.userComponent.currentUser.email);
      /* });*/
     }


}
