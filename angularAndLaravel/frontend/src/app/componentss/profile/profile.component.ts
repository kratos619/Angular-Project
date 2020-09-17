import { UsersService } from './../../service/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private _usersData: UsersService) {}
  users = [];
  from_page = 1;
  last_page;
  pageNumArray = [];
  current_page;
  ngOnInit(): void {
    console.log('profile');
    this._usersData.getUsersList('users-list?page=1').subscribe((res: any) => {
      this.users = res.data;
      this.last_page = res.last_page;
      console.log(this.last_page);
      this.current_page = res.current_page;
      this.makeTotalNumberPage(this.last_page);
    });
  }
  makeTotalNumberPage(lastPage) {
    this.pageNumArray = [];
    for (let index = 1; index <= lastPage; index++) {
      this.pageNumArray.push(index);
    }
  }
  get_page_num(current_item) {
    event.preventDefault();
    console.log(current_item);
    this._usersData
      .getUsersList('users-list?page=' + current_item)
      .subscribe((res: any) => {
        this.users = res.data;
        this.last_page = res.last_page;
        this.current_page = res.current_page;
        this.makeTotalNumberPage(this.last_page);
      });
  }
}
