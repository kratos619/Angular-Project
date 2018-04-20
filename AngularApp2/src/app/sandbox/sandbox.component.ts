import { Customer } from './customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  styleUrls: ['./sandbox.component.css'],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent implements OnInit {
  ngOnInit;
  text: string = 'helloWordl';
  val: boolean = true;
  clickEvent() {
    this.val = !this.val;
  }

  oneWayBinding(e) {
    this.text = e.target.value;
  }
}
