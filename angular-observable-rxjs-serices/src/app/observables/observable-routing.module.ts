import { ConcatComponent } from './observables-list/concat/concat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesListComponent } from './observables-list/observables-list.component';
import { FromEventComponent } from './observables-list/from-event/from-event.component';
import { ObservablesComponent } from './observables.component';
import {IntervalComponent} from './observables-list/interval/interval.component';
import {FromOfOperatorComponent} from './observables-list/from-of-operator/from-of-operator.component';
import { ToarrayComponent } from './observables-list/toarray/toarray.component';
import {MapComponent} from './observables-list/map/map.component';
import {PluckComponent} from './observables-list/pluck/pluck.component';
import {FilterComponent} from './observables-list/filter/filter.component';
import {TapComponent} from './observables-list/tap/tap.component';
import {RetryComponent} from './observables-list/retry/retry.component';
import {DebounceUtilComponent} from './observables-list/debounce-util/debounce-util.component';
import {SubjectComponent} from './observables-list/subject/subject.component';
import { MeargeComponent } from './observables-list/mearge/mearge.component';
import { SwitchMapComponent } from './observables-list/switch-map/switch-map.component';

const routes: Routes = [
  {
    path: 'observables',
    component: ObservablesComponent,
    children: [
      { path: '', component: ObservablesListComponent },
      { path: 'fromevent', component: FromEventComponent },
      { path: 'intervels', component: IntervalComponent },
      { path: 'of-from-operator', component: FromOfOperatorComponent },
      { path: 'to-arry', component: ToarrayComponent },
      { path: 'map-observables', component: MapComponent },
      { path: 'pluck-observables', component: PluckComponent },
      { path: 'filter-observables', component: FilterComponent },
      { path: 'tap-observables', component: TapComponent },
      { path: 'to-retry', component: RetryComponent },
      { path: 'debouncetime-util', component: DebounceUtilComponent },
      { path: 'subject-and-behavior-subject', component: SubjectComponent },
      { path: 'concate', component: ConcatComponent },
      { path: 'Mearge-Component', component: MeargeComponent },
      { path: 'switch-map', component: SwitchMapComponent },
    ],
  },
  // { path: '**', redirectTo: 'observables' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
