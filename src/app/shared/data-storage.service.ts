import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService ){}

    storeRecipes(){
        return this.http.put('https://ng-recipe-book-3e2c0-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        this.recipeService.getRecipes());
    }
}