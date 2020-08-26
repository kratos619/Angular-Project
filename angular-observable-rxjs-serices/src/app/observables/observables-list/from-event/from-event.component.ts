import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { fromEvent } from 'rxjs';
import {FromeventService} from '../../../appservice/fromevent.service';
@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('fromEventButton') fromEventButton: ElementRef;
  @ViewChild('appendLi') appendLi: ElementRef;
  @ViewChild('appendLiTwo') appendLi2: ElementRef;
  counter = 1;
  constructor(private dataService : FromeventService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
     fromEvent(this.fromEventButton.nativeElement, 'click')
      .subscribe(
        (res) => {
          console.log(res);
          this.dataService.appendData(this.counter++,this.appendLi );
          this.dataService.appendData(this.counter++,this.appendLi2 );
        }
      );
  }


}
