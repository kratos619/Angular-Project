import { Component, OnInit } from '@angular/core';
import {IUserSettings} from '../../data/interface/IUserSettings'
@Component({
  selector: 'app-forms-one',
  templateUrl: './forms-one.component.html',
  styleUrls: ['./forms-one.component.css'],
})


export class FormsOneComponent implements OnInit {
  userSettings: IUserSettings = {
    name: "string name",
    emailOffer: true ,
    interfacestyle: "dark",
    subscription_type: "monthly",
    notes: "this is notes....",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
