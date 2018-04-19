import { Customer } from './customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  styleUrls: ['./sandbox.component.css'],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent implements OnInit {
  age: number = 16;
  greetings: number = 2;

  selecttutorial: number = 2;
  ngOnInit() {}
}
