import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './Layout/app-header/app-header.component';
import { FormsOneComponent } from './Forms/forms-one/forms-one.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FormsOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
