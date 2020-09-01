import { TokenService } from './../../service/Token/token.service';

import { AuthService } from 'src/app/service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error;
  public form = {
    email: null,
    password: null,
  };

  constructor(
    private authService : AuthService,
    private tokenHandler : TokenService,
    private route : Router
    ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login('auth/login',this.form)
      .subscribe(
        (res) => {
          console.log(res);
          this.handleResponseToken(res);

        },
        (err) => {
          console.log(err);
          this.error = err.error
          console.log('thiserror',this.error);

        }
      )
  }

  handleResponseToken(data){
    this.tokenHandler.handle(data.access_token);
    this.authService.changeAuthStatus(true);
    this.route.navigateByUrl('/profile');

  }
}

