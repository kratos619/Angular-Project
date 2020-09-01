import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './componentss/signup/signup.component';
import { ProfileComponent } from './componentss/profile/profile.component';
import { HomeComponent } from './componentss/home/home.component';

const routes: Routes = [
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "signup",
    component : SignupComponent
  },
  {
    path : "profile",
    component : ProfileComponent
  },
  {
    path : "home",
    component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
