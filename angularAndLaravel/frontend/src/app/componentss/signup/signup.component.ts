import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { TokenService } from 'src/app/service/Token/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errors;
  form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
  };
  constructor(private authService: AuthService,private _token : TokenService,private _route : Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form);
    this.authService.registerUser('auth/register-user', this.form)
        .subscribe(
          (res) => {
            this.handleResponse(res);
          },
          (err) => {
            this.errors = err.error.errors;
            console.log('err', this.errors);
          }
        );
  }

  handleResponse(data){
      this._token.handle(data.access_token);
      this.authService.changeAuthStatus(true);
      this._route.navigateByUrl('/profile');
  }


}
