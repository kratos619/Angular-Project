import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { PromisesComponent } from './promises/promises.component';

const routes: Routes = [
  { path: 'promises', component: PromisesComponent },
  // { path: '**', redirectTo: 'observables' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
