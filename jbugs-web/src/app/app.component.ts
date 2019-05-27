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

  alertUserFromList(user: User) {
    alert(user.firstname);
  }

  alertChild() {
    alert(this.inputListViewChild.lastname);
  }


}
