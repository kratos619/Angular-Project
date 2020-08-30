import { Component, OnInit } from '@angular/core';
import {FromeventService} from '../../../../appservice/fromevent.service';

@Component({
  selector: 'app-subject-demo-com-two',
  templateUrl: './subject-demo-com-two.component.html',
  styleUrls: ['./subject-demo-com-two.component.css']
})
export class SubjectDemoComTwoComponent implements OnInit {

  userName;
  constructor(private _dataService : FromeventService) {
    this._dataService.userNameService.subscribe(
      value => {
        console.log('child two cons',value );
        this.userName = value;
      }
    )
  }


  ngOnInit(): void {
  }

  getInputData(inputData){
    this._dataService.userNameService.next(inputData.value)
  }

}
