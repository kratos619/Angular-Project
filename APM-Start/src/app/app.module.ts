import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list/product-list.component';

import {FormsModule} from '@angular/forms';
import { ConvertospacePipe } from './shared/convertospace.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent} from './home/welcome.component';

import {RouterModule} from '@angular/router';
import { ProductsdetailsComponent } from './Products/productsdetails/productsdetails.component';
const routes = [
  {path : 'products',component : ProductListComponent},
  {path: 'products/:id',component:ProductsdetailsComponent},
  {path: 'welcome',component:WelcomeComponent},
  {path: '', redirectTo: 'welcome',pathMatch:'full'},
  {path: '**', redirectTo: 'welcome',pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertospacePipe,
    StarRatingComponent,
    ProductsdetailsComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
