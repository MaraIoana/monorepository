import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestUser} from "../../models/restUser.models";
import {UserService} from "../services/user.service";
import {addUser} from "../../models/addUser.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
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
      })
  }

  alertUser(person: addUser) {
    alert(person.mobileNumber);
    this.output.emit(person);
  }


}
