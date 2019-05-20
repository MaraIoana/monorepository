import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserModule} from "./user/user.module";
import {HttpClientModule} from "@angular/common/http";
import {UserManagementComponent} from './user-management/user-management.component';
import {FormsModule} from "@angular/forms";
import {SummaryPipe} from "./summary.pipe";
import {LoginComponent} from './login/login.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UsersComponent} from './users/users.component';
import {BugsComponent} from './bugs/bugs.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    SummaryPipe,
    LoginComponent,
    UserEditComponent,
    UsersComponent,
    BugsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





