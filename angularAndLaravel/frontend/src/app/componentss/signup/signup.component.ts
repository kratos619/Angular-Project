import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form);
    this.authService.registerUser('auth/register-user', this.form)
        .subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            this.errors = err.error.errors;
            console.log('err', this.errors);
          }
        );
  }
}
