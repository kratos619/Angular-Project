import { Question } from './../modules/Questions';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  questions: Question[];
  constructor() {
    this.questions = [
      { text: 'What is Your Name?', ans: 'My Name Is Gaurav', hide: true },
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

  getQuestions() {
    return this.questions;
  }
}
