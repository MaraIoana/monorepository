import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestUser} from "../../models/restUser.models";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userList: RestUser[];

  @Output()
  public output = new EventEmitter<RestUser>();
  public showList = true;

  constructor(private userService: UserService) {
  }


  ngOnInit() {
    console.log("initialize userList with backend stuff");
    this.userService.getAllUsers()
      .subscribe((userList) => {
        this.userList = userList;
      });
    console.log(this.userList);
  }

  alertUser(person: RestUser) {
    this.output.emit(person);
  }

  //
  // users = [
  //   {id:1, name:'a'},
  //   {id:2, name:'b'},
  //   {id:3, name:'c'}
  // ];
  // constructor() { }
  //
  // ngOnInit() {
  // }

}
