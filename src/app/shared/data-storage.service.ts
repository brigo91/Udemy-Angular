import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map } from 'rxjs/operators';
import { RecipesComponent } from "../recipes/recipes.component";

@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService ){}

    storeRecipes(){
        return this.http.put('https://ng-recipe-book-3e2c0-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        this.recipeService.getRecipes());
    }

    getRecipes(){
        this.http.get('https://ng-recipe-book-3e2c0-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
        .pipe(
            map(
                (recipes: Recipe[]) => {
                    for(let recipe of recipes){
                        if(!recipe['ingredients']){
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}