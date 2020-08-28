import { Component, OnInit } from '@angular/core';
import {from, interval, Observable, Subscription} from 'rxjs';
import {map, take, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  dataOne;
  dataUnSubAfterTen;
  dataUnSubAfterTenSubHandler : Subscription;
  dataforMapping = from(
    [
      {name : "gaurav"},
      {name : "saurav"},
      {name : "aryan"},
      {name : "rohit"},
    ]
  );
  ngOnInit(): void {
    const dataStreamOne = interval(1000);
    dataStreamOne
      .pipe(
        map(
          (res) => {
            this.dataOne = res
          })
      )
      .subscribe(
      // (res) => {console.log(res);}
    );
    this.dataUnSubAfterTenSubHandler = dataStreamOne
      .pipe(
        map((res) => {
          // console.log(res);
          this.dataUnSubAfterTen = res;
          if (res >= 10){
            this.dataUnSubAfterTenSubHandler.unsubscribe();
          }
        })
      ).subscribe();

    this.dataforMapping.pipe(
      map((res)=>{
        console.log("display Name",res.name);
      })
    ).subscribe();
  }

}
