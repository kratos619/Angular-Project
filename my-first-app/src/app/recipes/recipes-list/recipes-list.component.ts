import { Component, OnInit } from '@angular/core';
import {Recipes} from "../recipes.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes : Recipes [] = [
  new Recipes('this is thest name','this is test description','https://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg?downsize=630:380&output-quality=70&output-format=webp'),
  new Recipes('this is thest name','this is test description','https://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg?downsize=630:380&output-quality=70&output-format=webp')
];
  constructor() { }

  ngOnInit() {
  }

}
