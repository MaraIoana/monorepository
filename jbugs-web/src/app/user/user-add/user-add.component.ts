import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {addUser} from "../../models/addUser.model";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  public userNew: addUser = {};
  roles = [
    {name:'ADMINISTRATOR', value:'1', checked:false},
    {name:'PROJECT_MANAGER', value:'2', checked:false},
    {name:'TEST_MANAGER', value:'3', checked:false},
    {name:'DEVELOPER', value:'4', checked:false},
    {name:'TESTER', value:'5', checked:false}
  ]
  get selectedOptions() {
    return this.roles
      .filter(opt => opt.checked)
      .map(opt => opt.name)
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  addUser(form: NgForm) {
    this.userNew.firstName = form.value.firstName;
    this.userNew.lastName = form.value.lastName;
    this.userNew.email = form.value.email;
    this.userNew.mobileNumber = form.value.mobileNumber;
    this.userNew.roles= this.selectedOptions;
    this.userService.addUser(this.userNew).subscribe(
      result => {
        if(result.messageCode){
          alert("Error while creating user: " +result.message);
        }
        else{
          alert("User with username: " + result.firstName +" was successfully created!");
        }
      }
    );

  }

  back() {
    this.router.navigate(['/dashboard/users']);
  }
}
