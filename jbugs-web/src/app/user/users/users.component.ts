import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {addUser} from '../../models/addUser.model';
import {UserService} from '../services/user.service';
import { Router } from '@angular/router';
import {RestUser} from "../../models/restUser.models";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userList: RestUser[];
  public currentUser: RestUser;
  public id: number;


  @Output()
  public output = new EventEmitter<RestUser>();
  public showList = true;

  constructor(private userService: UserService, private router:Router ) {
  }


  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe((userList) => {
        this.userList = userList;
      });
  }

  updateUser(person: RestUser) {
    this.currentUser = person;
    alert(person.firstName);
    //this.id = 1;
    //this.router.navigateByUrl("userid/edit");
    this.router.navigate([ "/edit" ,this.currentUser.username]);
  }

}
