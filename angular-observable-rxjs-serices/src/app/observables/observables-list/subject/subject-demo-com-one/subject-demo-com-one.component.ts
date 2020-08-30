import { Component, OnInit } from '@angular/core';
import { FromeventService } from 'src/app/appservice/fromevent.service';

@Component({
  selector: 'app-subject-demo-com-one',
  templateUrl: './subject-demo-com-one.component.html',
  styleUrls: ['./subject-demo-com-one.component.css']
})
export class SubjectDemoComOneComponent implements OnInit {


  userName;
  constructor(private _dataService: FromeventService) {
    this._dataService.userNameService.subscribe(
      value => {
        console.log('child two cons', value);
        this.userName = value;
      }
    )
  }
  ngOnInit(): void {
  }

  getName(name){
    this._dataService.userNameService.next(name.value);
  }

}
