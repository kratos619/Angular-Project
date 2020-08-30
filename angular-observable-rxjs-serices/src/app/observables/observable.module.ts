import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservablesListComponent } from './observables-list/observables-list.component';
import { FromEventComponent } from './observables-list/from-event/from-event.component';
import { IntervalComponent } from './observables-list/interval/interval.component';
import { FromOfOperatorComponent } from './observables-list/from-of-operator/from-of-operator.component';
import { ToarrayComponent } from './observables-list/toarray/toarray.component';
import { MapComponent } from './observables-list/map/map.component';
import { PluckComponent } from './observables-list/pluck/pluck.component';
import { FilterComponent } from './observables-list/filter/filter.component';
import { TapComponent } from './observables-list/tap/tap.component';
import { RetryComponent } from './observables-list/retry/retry.component';
import { DebounceUtilComponent } from './observables-list/debounce-util/debounce-util.component';
import {FormsModule} from '@angular/forms';
import { SubjectComponent } from './observables-list/subject/subject.component';
import { SubjectDemoComOneComponent } from './observables-list/subject/subject-demo-com-one/subject-demo-com-one.component';


@NgModule({
  declarations: [ObservablesListComponent, FromEventComponent, IntervalComponent, FromOfOperatorComponent, ToarrayComponent, MapComponent, PluckComponent, FilterComponent, TapComponent, RetryComponent, DebounceUtilComponent, SubjectComponent, SubjectDemoComOneComponent],
    imports: [
        CommonModule,
        ObservableRoutingModule,
        FormsModule
    ]
})
export class ObservableModule { }
