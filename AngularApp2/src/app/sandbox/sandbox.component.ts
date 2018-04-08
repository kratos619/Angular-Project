import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css'],
  template : `
  <h3>{{printnumArray()}}</h3>
  <h3>{{printstring()}}</h3>
  <h3>{{printanyArry()}}</h3>
  `
})
export class SandboxComponent implements OnInit {

  name: String  = 'gaurav';
numberArray:number[] = [1,2,3,4];
Stringarray:string[] = ['gaurav','milind','palaspagar'];
anyarray:any[] =  [1,'gaurav',false];

  person = {
    firstName : 'gaurav',
    sencondName : 'ingle',
  };
  constructor() {
   }
printnumArray(){
  return this.numberArray;
}
printstring(){
  return this.Stringarray;
}
printanyArry(){
  return this.anyarray;
}
  ngOnInit() {
  }

}
