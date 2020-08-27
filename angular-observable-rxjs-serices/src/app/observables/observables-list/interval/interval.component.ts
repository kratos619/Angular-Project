import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {interval, Subscription, timer} from 'rxjs';
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
  @ViewChild('appendIntervelDataOne') appendIntervelDataOne : ElementRef;

  videoSubscription : Subscription;
  constructor(private _appendData : FromeventService) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const timeIntervel = timer(5000,1000);
    const _intervel = interval(1000);
    this.videoSubscription = timeIntervel.subscribe(res => {
      this._appendData.appendData(res,this.userOne)
      this._appendData.appendData(res,this.userTwo)
      if (res >= 5){
        this.videoSubscription.unsubscribe();
        return 0;
      }
    })
    this.videoSubscription = _intervel.subscribe(
      (res) => {
        this._appendData.appendData(res,this.appendIntervelDataOne);
        if (res >= 5) {
          this.videoSubscription.unsubscribe();
        }
      }

    )
  }


}
