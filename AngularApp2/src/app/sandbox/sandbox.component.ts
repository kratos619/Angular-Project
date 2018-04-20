import { Customer } from './customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  styleUrls: ['./sandbox.component.css'],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent implements OnInit {
  ngOnInit;
  users = {
    firstname: '',
    lastname: '',
    email: ''
  };
}
