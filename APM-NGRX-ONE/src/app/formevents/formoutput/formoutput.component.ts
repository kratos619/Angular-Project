import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-formoutput',
  templateUrl: './formoutput.component.html',
  styleUrls: ['./formoutput.component.css'],
})
export class FormoutputComponent implements OnInit, OnDestroy {
  constructor(private _store: Store<any>) {}
  @Input() item: string; // decorate the property with @Input()

  values;
  subscription: Subscription;

  ngOnInit(): void {
    // this.subscription = this._store.select('formEvents').subscribe((state) => {
    //   this.values = state.formData;
    // });
  }

  ngOnDestroy() {
    console.log('unsubscribe');
  }
}
