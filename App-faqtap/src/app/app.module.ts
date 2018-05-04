import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionlistComponent } from './Components/questionlist/questionlist.component';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, QuestionlistComponent, QuestionComponent],
  imports: [BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
