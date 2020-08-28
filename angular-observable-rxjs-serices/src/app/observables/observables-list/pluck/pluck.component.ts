import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {from} from 'rxjs';
import {pluck, take, toArray} from 'rxjs/operators';
import {FromeventService} from '../../../appservice/fromevent.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit,AfterViewInit {

  @ViewChild('pluckOne') pluckOne : ElementRef;
  constructor(private _appendData : FromeventService) { }

  usersOne = [
    {
      name : "abc",
      age : 11,
      gender  : "m"
    },
    {
      name : "qbc",
      age : 11,
      gender  : "m"
    },
    {
      name : "cbc",
      age : 11,
      gender  : "m"
    }
  ]
  usersTwo = [
    {
      name : "abc",
      age : 11,
      gender  : "m",
      skills : ["html",'css','js']
    },
    {
      name : "qbc",
      age : 11,
      gender  : "m",
      skills : ["react",'angular','js']
    },
    {
      name : "cbc",
      age : 11,
      gender  : "m",
      skills : ["node",'php','ruby']
    }
  ]
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const streamTwo = from(this.usersOne);
    const streamOne = from(this.usersTwo);
    streamTwo.pipe(
      pluck('name'),
    ).
    subscribe(
      (res) => {
        console.log('pluck only  name properties',res);
        console.log(this.pluckOne);
        this._appendData.printData(res,this.pluckOne);
      }
    )

    streamOne.
      pipe(
        pluck('skills')
    ).
    subscribe(
      (res) => {
        console.log(res);
      }
    )
}
}
