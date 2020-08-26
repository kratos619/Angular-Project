import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './observables/observables.component';
import { HeaderComponent } from './header/header.component';
import { PromisesComponent } from './promises/promises.component';
import { ObservableModule } from './observables/observable.module';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    HeaderComponent,
    PromisesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObservableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
