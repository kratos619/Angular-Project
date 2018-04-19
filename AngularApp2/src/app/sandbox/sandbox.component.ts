import { Customer } from './customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  styleUrls: ['./sandbox.component.css'],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent implements OnInit {
  birthday = new Date(1994, 1, 7);
  ngOnInit;
}
