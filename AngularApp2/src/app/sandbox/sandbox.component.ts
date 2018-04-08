import { Customer } from './customer';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css'],


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

  customer : Customer;

   customerArra:Customer[];
  
  constructor() {
     this.customer = {
      id: 1,
      name:'gaurav',
      email : 'mail@gmil.com'
    }
    // call customerrs array
    this.customerArra = [
      {
        id: 1,
        name: 'gaurav',
        email: 'mail@gmil.com'
      },
      {
        id: 2,
        name: 'num2',
        email: 'mail@gmil.com'
      },
      {
        id: 3,
        name: 'dsdad',
        email: 'numthree@gmil.com'
      },
      {
        id: 4,
        name: 'rajeev',
        email: 'rajeev@gmil.com'
      }

    ];
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
