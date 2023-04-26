import { Component } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeDataService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  private idCard:number = 0;
  recipes: Recipe[] = [];

constructor(private recipeService : RecipeDataService){

}

  ngOnInit(): void {
    this.getRecipes();
    console.log(this.recipes);
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
        .subscribe(recipes => this.recipes = recipes);
  }
}




