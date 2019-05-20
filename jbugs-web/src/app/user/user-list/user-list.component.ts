import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestUser} from "../../models/restUser.models";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
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
      })
  }

  alertUser(person: RestUser) {
    alert(person.mobileNumber);
    this.output.emit(person);
  }


}

//import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
//import {User} from "../../models/user.model";
// import {UserService} from "../services/user.service";
// import {RestUser} from "../../models/restUser.models";
//
//
// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent implements OnInit {
//
//   public userlist: RestUser[];
//
//   @Output()
//   public output = new EventEmitter<User>();
//
//   public showlist = true;
//
//
//   constructor(private userService: UserService) { }
//
//   ngOnInit() {
//     this.userService.getAllUsers()
//       .subscribe((userList) => {
//         this.userlist = userList;
//       });
//   }
//
//   alertUser(person: User){
//       this.output.emit(person);
//   }
//
// }
