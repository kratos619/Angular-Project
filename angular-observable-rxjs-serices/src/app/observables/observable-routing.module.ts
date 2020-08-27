import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesListComponent } from './observables-list/observables-list.component';
import { FromEventComponent } from './observables-list/from-event/from-event.component';
import { ObservablesComponent } from './observables.component';
import {IntervalComponent} from './observables-list/interval/interval.component';
import {FromOfOperatorComponent} from './observables-list/from-of-operator/from-of-operator.component';
import { ToarrayComponent } from './observables-list/toarray/toarray.component';

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
    ],
  },
  // { path: '**', redirectTo: 'observables' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
