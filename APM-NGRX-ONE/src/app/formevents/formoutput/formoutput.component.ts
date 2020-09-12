import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-formoutput',
  templateUrl: './formoutput.component.html',
  styleUrls: ['./formoutput.component.css'],
})
export class FormoutputComponent implements OnInit, OnDestroy {
  constructor(private _store: Store<any>) {}
  values;
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this._store.select('formEvents').subscribe((state) => {
      this.values = state.formData;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('unsubscribe');
  }
}
