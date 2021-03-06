import { Question } from './../../modules/Questions';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>();
  text: string;
  ans: string;

  constructor() {}

  ngOnInit() {}
  addQuestions() {
    this.questionAdded.emit({text: this.text,ans: this.ans,hide: true});
  }
}
