import { ServicesComponent } from './../services/services.component';
import { Customer } from './customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  styleUrls: ['./sandbox.component.css'],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent implements OnInit {
  data: any[] = [];

  constructor(public services: ServicesComponent) {
    this.services.getData().subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {}
}
