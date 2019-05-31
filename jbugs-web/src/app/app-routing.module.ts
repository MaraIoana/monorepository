import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {BugsComponent} from "./bug/bugs/bugs.component";
import {NgModule} from "@angular/core";
import {UsersComponent} from "./user/users/users.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";
import {LoggedInGuard} from "./logged-in.guard";
import {LoginComponent} from "./login/login.component";
import {UserAddComponent} from "./user/user-add/user-add.component";
import {RolesComponent} from "./role/roles/roles.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: 'users',
        children: [
          {
            path: '',
            component: UsersComponent,
          },
          {
            path:'user-add',
            component:UserAddComponent
          },
          {
            path:'edit/:userName',
            component:UserEditComponent
          },
          {
            path: ':userId',
            children: [
              {
                path: 'edit',
                component: UserEditComponent
              }
            ]
          }
        ]
      },
      {
        path: 'bugs',
        component: BugsComponent
      },
      {
        path:'roles',
        children:[
          {
            path:'',
            component:RolesComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
