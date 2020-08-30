import { Component, OnInit } from '@angular/core';
import {FromeventService} from '../appservice/fromevent.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  exclusive:boolean = false;

  constructor(private _designUtility : FromeventService) { }

  ngOnInit():void {
    this._designUtility.exclusiveService.subscribe((res) => {
       console.log(res);
       this.exclusive = res
    })
  }

}
