import {Component, ViewChild} from '@angular/core';
import {User} from "./models/user.model";
import {Roles} from "./models/roles.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('userList')
  public inputListViewChild;

  title = 'jbugs-web';
  title2 = 'training-app';

  public user: User = {
    firstname: "Zsombor",
    lastname: "l2",
    age: 48,
    roles: [Roles.CREATE_BUG]
  };
  public users: User[] = [
    {
      firstname: "Zsosmbor",
      lastname: "l2",
      age: 48,
      roles: [Roles.DELETE_BUG]
    },
    {
      firstname: "f2",
      lastname: "l2",
      age: 11,
      roles: [Roles.CREATE_BUG, Roles.DELETE_BUG]
    },
    {
      firstname: "f3",
      lastname: "l3",
      age: 28,
      roles: [Roles.CREATE_BUG]
    }
  ]

  alertUserFromList(user: User) {
    alert(user.firstname);
  }

  alertChild() {
    alert(this.inputListViewChild.lastname);
  }


}
