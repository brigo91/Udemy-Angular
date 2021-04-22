import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe(
            "A Test Recipe",
            "This is simply a test",
            "https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?quality=90&crop=1px%2C328px%2C597px%2C257px&resize=597%2C254",
            [
                new Ingredient("blabla", 2), new Ingredient("asdasd", 2)
            ]
        ),
        new Recipe(
            "Another test recipe",
            "This is my recipe",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png?crop=0.670xw:1.00xh;0.0513xw,0&resize=640:*",
            [
                new Ingredient("blabla", 3), new Ingredient("asdasd", 3)
            ]
            )
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}