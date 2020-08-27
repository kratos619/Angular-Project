import { Component, OnInit } from '@angular/core';
import {from, interval, Subscription} from 'rxjs';
import {take, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.css']
})
export class ToarrayComponent implements OnInit {

  constructor() { }

   arrData = [
    {
      name : "gaurav",
      age  : 23,
    },
     {
       name : "saurav",
       age  : 24,
     },
     {
       name : "aryan",
       age  : 25
     },
  ]
  subcriptionHandler : Subscription;
  ngOnInit(): void {
    const intervalData = interval(1000);
    this.subcriptionHandler = intervalData
                .pipe(take(5),toArray())
                .subscribe((res) => {console.log(res);})

    const streamTwo = from(this.arrData);
    streamTwo.pipe(
      take(1),
      toArray()
    ).
    subscribe(
      (res) => {console.log(res);}
    )
  }

}
