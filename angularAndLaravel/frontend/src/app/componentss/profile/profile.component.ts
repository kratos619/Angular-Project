import { UsersService } from './../../service/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private _usersData: UsersService) {}

  ngOnInit(): void {
    console.log('profile');
    this._usersData.getUsersList('users-list').subscribe((res) => {
      console.log(res);
    });
  }
}
