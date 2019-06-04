import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserDetailsComponent} from "../user-details/user-details.component";
import {MatDialog} from "@angular/material";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users-cell',
  templateUrl: './users-cell.component.html',
  styleUrls: ['./users-cell.component.css']
})
export class UsersCellComponent implements OnInit {

  private rowData;

  constructor(private router:Router,
              private dialog:MatDialog) { }

  agInit(params){
    this.rowData = params.data;
  }

  ngOnInit() {

  }

  onEdit(){
    this.router.navigate(["dashboard/users/edit", this.rowData.username]);
  }

  onDetail(){
    let dialogRef = this.dialog.open(UserDetailsComponent,{
      data:this.rowData,
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result)
        console.log(result.message);
    })
  }
}
