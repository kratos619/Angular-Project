import { Component, OnInit } from '@angular/core';
import {IUserSettings} from '../../data/interface/IUserSettings'
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-forms-one',
  templateUrl: './forms-one.component.html',
  styleUrls: ['./forms-one.component.css'],
})


export class FormsOneComponent implements OnInit {
  userSettings: IUserSettings = {
    name: null,
    emailOffer: null ,
    interfacestyle: null,
    subscription_type: null,
    notes: null,
  }
  constructor() { }

  onSubmit(form : NgForm){
    console.log(form.valid);
  }

  ngOnInit(): void {
  }

}
