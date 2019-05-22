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
    this.userService.getAllUsers()
      .subscribe((userList) => {
        this.userList = userList;
      });
  }

  alertUser(person: RestUser) {
    this.output.emit(person);
  }

}
