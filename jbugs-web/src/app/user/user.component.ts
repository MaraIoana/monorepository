import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  public user: User;
  public firstname: String;

  constructor() {
    this.firstname = "Johndoe";
  }

  @Output()
  public output = new EventEmitter<User>();


  alertUser(person: User) {
    this.output.emit(person);
  }

  ngOnInit() {
  }


}

//import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {User} from "../models/user.model";
// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent implements OnInit {
//
//   @Input()
//   public user: User;
//
//   @Output()
//   public output = new EventEmitter<User>();
//
//   constructor() {
//   }
//
//   ngOnInit() {
//   }
//
//   alertUser(person: User){
//     this.output.emit(person);
//   }
// }
