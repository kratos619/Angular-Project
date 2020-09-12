import { NgModule } from '@angular/core';
import { ForminputsComponent } from './forminputs/forminputs.component';
import { FormoutputComponent } from './formoutput/formoutput.component';
import { RouterModule, Routes } from '@angular/router';
import { FormbaseComponent } from './formbase.component';
import { StoreModule } from '@ngrx/store';
import { formReducre } from './form.reducr';
const userRoutes: Routes = [
  { path: 'formsevents', component: FormbaseComponent },
];
@NgModule({
  declarations: [ForminputsComponent, FormoutputComponent, FormbaseComponent],
  imports: [
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('formEvents', formReducre),
  ],
})
export class FormeventsModule {}
