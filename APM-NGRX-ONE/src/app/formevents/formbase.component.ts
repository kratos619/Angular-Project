import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-formbase',
  templateUrl: './formbase.component.html',
  styleUrls: ['./formbase.component.css'],
})
export class FormbaseComponent implements OnInit {
  constructor() {}
  currentItem = 'Television';
  newItemEvent(event) {
    this.currentItem = event;
    console.log('event', event);
  }

  ngOnInit(): void {}
}
