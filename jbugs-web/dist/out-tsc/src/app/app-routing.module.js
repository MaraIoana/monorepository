import * as tslib_1 from "tslib";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { BugsComponent } from "./bug/bugs/bugs.component";
import { NgModule } from "@angular/core";
import { UsersComponent } from "./user/users/users.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";
import { LoggedInGuard } from "./guards/logged-in.guard";
import { LoginComponent } from "./login/login.component";
import { UserAddComponent } from "./user/user-add/user-add.component";
import { RolesComponent } from "./role/roles/roles.component";
import { RoutingErrorComponent } from "./error/routing-error/routing-error.component";
const routes = [
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
                canActivate: [],
                children: [
                    {
                        path: '',
                        component: UsersComponent,
                    },
                    {
                        path: 'user-add',
                        component: UserAddComponent
                    },
                    {
                        path: 'edit/:userName',
                        component: UserEditComponent
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
                canActivate: [],
                component: BugsComponent
            },
            {
                path: 'roles',
                canActivate: [],
                children: [
                    {
                        path: '',
                        component: RolesComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'error',
        component: RoutingErrorComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map