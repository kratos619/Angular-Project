import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {of} from 'rxjs';
import {FromeventService} from '../../../appservice/fromevent.service';

@Component({
  selector: 'app-from-of-operator',
  templateUrl: './from-of-operator.component.html',
  styleUrls: ['./from-of-operator.component.css']
})
export class FromOfOperatorComponent implements OnInit , AfterViewInit {

  @ViewChild('fromOfOpOne') fromOfOpOne : ElementRef;
   objectData : object;
  constructor(private _appendData : FromeventService) { }

  ngOnInit(): void {
    let data = {
      name : 'gaurav',
      lname : "palaspagar",
      age : 26
    }
    let ofOpObj = of(data);
    ofOpObj.subscribe(
      (res) => {
        this.objectData = res;
        console.log("objectData",this.objectData);
        // this._appendData.appendData(,this.fromOfOpOne)
      }
    )
  }

  ngAfterViewInit(): void {
    let ofOp = of('data one','data two','data three');

    ofOp.subscribe(
      (res) => {
        this._appendData.appendData(res,this.fromOfOpOne)
      }
    );




  }

}
