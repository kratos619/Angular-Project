import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'pm-forminputs',
  templateUrl: './forminputs.component.html',
  styleUrls: ['./forminputs.component.css'],
})
export class ForminputsComponent implements OnInit {
  constructor(private _store: Store<any>) {}

  ngOnInit(): void {}

  getText(event: any) {
    console.log(event.target.value);
    this._store.dispatch({
      type: '[formOutputText] to formOutput area code',
      event: event.target.value,
    });
  }
}
