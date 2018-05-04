import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionlistComponent } from './Components/questionlist/questionlist.component';
import { QuestionComponent } from './components/question/question.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionlistComponent,
    QuestionComponent,
    AddQuestionsComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
