import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestUser} from "../../models/restUser.models";
import {UserService} from "../services/user.service";
import {addUser} from "../../models/addUser.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userList: addUser[];

  @Output()
  public output = new EventEmitter<addUser>();
  public showList = true;

  constructor(private userService: UserService) {
  }


  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe((userList) => {
        this.userList = userList;
      });
  }

  alertUser(person: addUser) {
    this.output.emit(person);
  }

}
