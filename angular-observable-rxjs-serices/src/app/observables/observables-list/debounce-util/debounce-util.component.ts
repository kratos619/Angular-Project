import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-debounce-util',
  templateUrl: './debounce-util.component.html',
  styleUrls: ['./debounce-util.component.css']
})
export class DebounceUtilComponent implements OnInit , AfterViewInit {

  @ViewChild('seachInputOne') seachInputOne: ElementRef;
  @ViewChild('seachInputTwo') seachInputTwo : ElementRef;
  searchQueryOneSpinner = false;
  searchQueryTwoSpinner = false;
  searchQueryOne;
  searchQueryTwo;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.debounceTimeCall();
    this.distinctUntilChangedCall();
  }

  distinctUntilChangedCall(){
    let searchTwo = fromEvent<any>(this.seachInputTwo.nativeElement,'keyup');
    searchTwo
      .pipe(
        map(value => {return value.target.value}),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(
        value => {
          console.log(value);
          this.sendFakeHttpReq(null,value);

        }
      )
  }
  debounceTimeCall(){
    let searchOne = fromEvent<any>(this.seachInputOne.nativeElement,'keyup')
    searchOne
      .pipe(
        map((value) => {return value.target.value}),
        debounceTime(1000),

      )
      .subscribe(
        value => {
          console.log(value);
          this.sendFakeHttpReq(value,null);
        }
      )
  }

sendFakeHttpReq(value,value2){
    if (value){
      this.searchQueryOneSpinner = true;
    }
    if(value2){
      this.searchQueryTwoSpinner = true
    }

  this.http.get('https://jsonplaceholder.typicode.com/users/1')
    .subscribe(
      value1 => {
        console.log(value1);
        if(value){
          this.searchQueryOneSpinner = false
          this.searchQueryOne = value;
        }
        if(value2){
          this.searchQueryTwoSpinner = false;
          this.searchQueryTwo = value2;
        }

      },
      error => {
        // this.searchQueryOneSpinner = true;
        console.log(error);
      }
    )
}
}
