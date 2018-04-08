import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  name  = "gaurav";

  person ={
    firstName :'gaurav',
    sencondName : 'ingle'
  }
  constructor() { }

  ngOnInit() {
  }

}
