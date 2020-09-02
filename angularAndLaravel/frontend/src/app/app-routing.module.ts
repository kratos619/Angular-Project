import { AfterloginService } from './service/after-login/afterlogin.service';
import { BrfoureloginService } from './service/befoure-login/brfourelogin.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './componentss/signup/signup.component';
import { ProfileComponent } from './componentss/profile/profile.component';
import { HomeComponent } from './componentss/home/home.component';



const routes: Routes = [
  {
    path : "login",
    component : LoginComponent,
    canActivate : [BrfoureloginService]
  },
  {
    path : "signup",
    component : SignupComponent,
    canActivate : [BrfoureloginService]
  },
  {
    path : "profile",
    component : ProfileComponent,
    canActivate : [AfterloginService]
  },
  {
    path : "home",
    component : HomeComponent,
    canActivate : [AfterloginService]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
