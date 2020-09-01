import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { TokenService } from 'src/app/service/Token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;

  constructor(private _authService: AuthService,private _tokenService : TokenService,private _router : Router) {}

  ngOnInit(): void {
    this._authService.authStatus.subscribe((res) => {
      this.loggedIn = res;
      console.log('a', res);
    });
  }

  loggout(event:Event){
      event.preventDefault();
      this._tokenService.remove();
      this._authService.changeAuthStatus(false);
      this._router.navigateByUrl('/login');
      console.log(event);


  }
}
