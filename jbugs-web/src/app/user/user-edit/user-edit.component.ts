import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RestUser} from '../../models/restUser.models';
import {NgForm} from '@angular/forms';
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user: RestUser = {};
  public username: string;
  roles = [
    {name: 'ADMINISTRATOR', value: '1', checked: false},
    {name: 'PROJECT MANAGER', value: '2', checked: false},
    {name: 'TEST MANAGER', value: '3', checked: false},
    {name: 'DEVELOPER', value: '4', checked: false},
    {name: 'TESTER', value: '5', checked: false/*this.isChecked()*/}
  ]


  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    console.log(this.user.roles);
  }

  isChecked() {
    console.log(this.user.roles);
    return true;

  }

  submit(form: NgForm) {
    console.log(this.user.roles);
    this.user.firstName = form.value.firstName;
    this.user.lastName = form.value.lastName;
    this.user.email = form.value.email;
    this.user.mobileNumber = form.value.mobileNumber;
    alert(this.user.roles);
    //only for test
    //todo remove this line
    //this.userService.updateUser(this.user);

    this.userService.updateUser(this.user).subscribe(
      result => alert("User with username: " + result.username + " updated successfully"),
        error => {
          console.log(error)
          alert("Error during Update...")
        }
      );

  }

     ngOnInit() {

       this.activatedRoute.paramMap.subscribe(
         (params: ParamMap) => {
           this.username=params.get('userName');
         }
       );


       this.userService.getUser(this.username).subscribe((user) => {
         this.user = user;
       });
       console.log(this.user.roles);
       //this.user.mobileNumber = "0040666666"
       //console.log(this.user.mobileNumber);




       //this.user = this.userComponent.currentUser;
       console.log("currentUser get from ...:");
      /* this.sub = this. activatedRoute.params.subscribe(params => {
         this.id = +params['id'];*/
       //console.log(this.userComponent.currentUser.email);
      /* });*/
       console.log(this.user.roles);
     }


}
