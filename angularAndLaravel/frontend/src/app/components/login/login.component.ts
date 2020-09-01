import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private authService : AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form);
    this.authService.login('auth/login',this.form)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
          this.error = err.error
          console.log('thiserror',this.error);

        }
      )
  }
}

