import {TasksComponent} from "./pages/tasks/tasks.component";
import {DxButtonModule} from "devextreme-angular/ui/button";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {ChangePasswordFormComponent, CreateAccountFormComponent, LoginFormComponent, ResetPasswordFormComponent} from "./shared/components";
import {DxFormModule} from "devextreme-angular/ui/form";
import {ProfileComponent} from "./pages/profile/profile.component";
import {NgModule} from "@angular/core";
import {AuthGuardService} from "./shared/services";
import {DxDataGridModule} from "devextreme-angular";
import {PrincipalComponent} from "./pages/principal/principal.component";
import {CidadeEstadoModule} from "./shared/components/cidadeestado/cidade-estado.component";


const routes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}),
    DxDataGridModule,
    DxFormModule,
    DxButtonModule,
    CidadeEstadoModule
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    PrincipalComponent
  ]
})
export class AppRoutingModule { }
