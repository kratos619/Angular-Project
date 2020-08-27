import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {FromeventService} from '../../../appservice/fromevent.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit , AfterViewInit{

  obMsg ;
  @ViewChild('userOne') userOne : ElementRef;
  @ViewChild('userTwo') userTwo : ElementRef;
  videoSubscription : Subscription;
  constructor(private _appendData : FromeventService) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const intervel = interval(1000);
    this.videoSubscription = intervel.subscribe(res => {
      this._appendData.appendData(res,this.userOne)
      this._appendData.appendData(res,this.userTwo)
      console.log(res);
      if (res >= 5){
        this.videoSubscription.unsubscribe();
      }
    })
  }


}
