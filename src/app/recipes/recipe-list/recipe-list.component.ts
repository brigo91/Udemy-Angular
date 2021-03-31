import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?quality=90&crop=1px%2C328px%2C597px%2C257px&resize=597%2C254"),
    new Recipe("My recipe", "This is my recipe", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png?crop=0.670xw:1.00xh;0.0513xw,0&resize=640:*")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
