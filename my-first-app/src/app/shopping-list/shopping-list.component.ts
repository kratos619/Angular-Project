import { Component, OnInit } from '@angular/core';
import {IngredientsModel} from "../Shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:IngredientsModel[]  = [
    new IngredientsModel('apple',5),
    new IngredientsModel('chicken',45)
  ];
  constructor() { }

  ngOnInit() {
  }

}
