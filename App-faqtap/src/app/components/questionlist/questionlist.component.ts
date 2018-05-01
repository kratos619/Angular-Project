import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {
  questions: Object[];
  constructor() {
    this.questions = [
      {
        text: 'What is Your Name?',
        ans: 'My Name Is Gaurav',
        hide: true
      },
      {
        text: 'What is Your Fav Color?',
        ans: 'my Fav Color Is Blue',
        hide: true
      },
      {
        text: 'What is Your Fav Language?',
        ans: 'My fav Language iS php and js',
        hide: true
      }
    ];
  }

  ngOnInit() {}
}
