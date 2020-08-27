import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservablesListComponent } from './observables-list/observables-list.component';
import { FromEventComponent } from './observables-list/from-event/from-event.component';
import { IntervalComponent } from './observables-list/interval/interval.component';
import { FromOfOperatorComponent } from './observables-list/from-of-operator/from-of-operator.component';
import { ToarrayComponent } from './observables-list/toarray/toarray.component';


@NgModule({
  declarations: [ObservablesListComponent, FromEventComponent, IntervalComponent, FromOfOperatorComponent, ToarrayComponent],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ]
})
export class ObservableModule { }
