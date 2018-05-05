import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Question } from './../../modules/Questions';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input('question') question: Question;
  constructor(public dataServices: DataService) {}

  ngOnInit() {}
  removeQuestion(question) {
    this.dataServices.removeQuestion(question);
  }
}
