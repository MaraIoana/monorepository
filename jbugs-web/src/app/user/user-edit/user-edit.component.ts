import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestUser} from "../../models/restUser.models";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user: RestUser;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  submit(form: NgForm) {

  }

     ngOnInit() {
    //   this.userService.getUser()
    //     .subscribe((user) => {
    //       this.user = user;
    //     });
    //
     }


}
