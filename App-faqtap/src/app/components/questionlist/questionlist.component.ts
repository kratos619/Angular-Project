import { Question } from './../../modules/Questions';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {
  questions: Object[];
  constructor(public dataservices: DataService) {}

  ngOnInit() {
    this.questions = this.dataservices.getQuestions();
  }
  addQuestion(question: Question) {
    this.dataservices.addQuestion(question);
  }
}
