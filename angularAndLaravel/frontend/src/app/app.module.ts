import { TokenService } from 'src/app/service/Token/token.service';
import { Router } from '@angular/router';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './componentss/signup/signup.component';
import { ProfileComponent } from './componentss/profile/profile.component';
import { HomeComponent } from './componentss/home/home.component';

import {FormsModule} from '@angular/forms';
import  { JwtModule } from '@auth0/angular-jwt'
import { AuthService } from './service/auth/auth.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['laraangular.example.com'],
        disallowedRoutes: ['http://laraangular.example.com/api/auth/login'],

        skipWhenExpired: true,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    public jwtHelper: JwtHelperService,
    private _route: Router,
    private _tokenService: TokenService,
    private authService: AuthService
  ) {
    console.log(
      'jwtHelper.getTokenExpirationDate();',
      this.jwtHelper.getTokenExpirationDate()
    );

    if (this.jwtHelper.isTokenExpired() === true) {
      this._tokenService.remove();
      this.authService.changeAuthStatus(false);
      this._route.navigateByUrl('/login');
    }
  }
}
