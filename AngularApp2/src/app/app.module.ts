import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [AppComponent, SandboxComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [ServicesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
