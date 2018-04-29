import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';

const appRouter : Routes = [
  { path:'',component:HomeComponent},
  { path:'about',component:AboutComponent}

]

@NgModule({
  declarations: [AppComponent, SandboxComponent, HomeComponent, AboutComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [ServicesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
