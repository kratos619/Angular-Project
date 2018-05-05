import { Question } from './../modules/Questions';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  questions: Question[];
  constructor() {}

  //get question from local storage
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }
  // add question to ls
  addQuestion(question: Question) {
    this.questions.unshift(question);
    //local variable
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      // push question
      questions.unshift(question);
      // set new array
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // add new questions
      questions.unshift(question);
      // reset ls
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }
  public removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question == this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
