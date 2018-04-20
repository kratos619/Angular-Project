import { Customer } from './customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  styleUrls: ['./sandbox.component.css'],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent implements OnInit {
  ngOnInit;
  firstname: string = '';
  users: string[] = ['gaurav'];

  addUser() {
    this.users.push(this.firstname);
  }
}
