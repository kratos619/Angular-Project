import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list/product-list.component';

import {FormsModule} from '@angular/forms';
import { ConvertospacePipe } from './shared/convertospace.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertospacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
