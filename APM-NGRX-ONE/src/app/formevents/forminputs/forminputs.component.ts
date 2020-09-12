import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'pm-forminputs',
  templateUrl: './forminputs.component.html',
  styleUrls: ['./forminputs.component.css'],
})
export class ForminputsComponent implements OnInit {
  constructor(private _store: Store<any>) {}
  @Input() item: string; // decorate the property with @Input()

  @Output() newItemEvent = new EventEmitter<any>();

  ngOnInit(): void {}

  getText(event: any) {
    // console.log(event.target.value);
    // this._store.dispatch({
    //   type: '[formOutputText] to formOutput area code',
    //   event: event.target.value,
    // });
    this.newItemEvent.emit(event.target.value);
  }
}
