import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {BugsComponent} from "./bugs/bugs.component";
import {NgModule} from "@angular/core";
import {UsersComponent} from "./users/users.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {LoggedInGuard} from "./logged-in.guard";
import {LoginComponent} from "./login/login.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
