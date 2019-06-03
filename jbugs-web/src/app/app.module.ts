import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserModule} from "./user/user.module";
import {HttpClientModule} from "@angular/common/http";
import {UserManagementComponent} from './user/user-management/user-management.component';
import {FormsModule} from "@angular/forms";
import {SummaryPipe} from "./summary.pipe";
import {LoginComponent} from './login/login.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {BugsComponent} from './bug/bugs/bugs.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { UserAddComponent } from './user/user-add/user-add.component';
import {RoleModule} from "./role/role.module";
import {ErrorModule} from "./error/error.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDialogModule, MatIconModule} from "@angular/material";
import { RolesCellComponent } from './role/customs/roles-cell/roles-cell.component';
import { PermissionsDialogComponent } from './role/customs/permissions-dialog/permissions-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    SummaryPipe,
    LoginComponent,
    BugsComponent,
    DashboardComponent,
    UserAddComponent,
    UserEditComponent,
    RolesCellComponent,
    PermissionsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    RoleModule,
    ErrorModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[RolesCellComponent,PermissionsDialogComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }





