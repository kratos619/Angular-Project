import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesListComponent } from './observables-list/observables-list.component';
import { FromEventComponent } from './observables-list/from-event/from-event.component';
import { ObservablesComponent } from './observables.component';

const routes: Routes = [
  {
    path: 'observables',
    component: ObservablesComponent,
    children: [
      { path: '', component: ObservablesListComponent },
      { path: 'fromevent', component: FromEventComponent },
    ],
  },
  // { path: '**', redirectTo: 'observables' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
