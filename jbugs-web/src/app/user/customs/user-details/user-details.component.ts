import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {UserService} from "../../services/user.service";
import {UserData} from "../../../models/UserData.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private user:UserData;

  private deactivateButton:boolean = false;
  private activateButton:boolean = false;

  private hasTasks:boolean = false;

  constructor(public dialogRef:MatDialogRef<UserDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any,private userService:UserService) { }

  ngOnInit() {
    this.userService.getUserData(this.data.username).subscribe(data=>{
      console.log(data);
      this.user = data;
    },
      error=>{
      console.log(error);
      },
      ()=>{
        this.checkButtons();
      }
      )
  }

  checkButtons(){
    if(this.user.counter >= 5){
      this.activateButton = true;
    }
    if(this.user.counter < 5 && !this.user.tasks.length){
      this.deactivateButton = true;
    }
    if(this.user.tasks.length){
      this.hasTasks = true;
    }
    else
      this.hasTasks = false;
  }

  activate(){
    this.userService.activateOrResetUser(this.user.username).subscribe(
      data =>{
      console.log(data);
    },
      error1 => console.log(error1),
      ()=> this.dialogRef.close({
        'message':'ACTIVATED'
      })
    );
  }

  deactivate() {
    this.userService.deactivateUser(this.user.username).subscribe(
      data => {
        console.log(data);
      },
      error1 => console.log(error1),
      () => this.dialogRef.close({
        'message':'DEACTIVATED'
      })
    );
  }

  close(){
    this.dialogRef.close();
  }

}
