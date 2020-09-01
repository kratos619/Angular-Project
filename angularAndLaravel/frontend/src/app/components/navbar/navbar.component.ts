import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn : boolean;


  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
    this._authService.authStatus.subscribe(
      (res) => {
        this.loggedIn = res;
        console.log('a',res);

      }
    );

  }

}
