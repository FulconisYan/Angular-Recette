import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  image!:string;
  imageTitle!:string;

  preparationTime!:number;
  cookingTime:number [] = [];
  difficulty!:number;

  ngOnInit(): void{
    //TODO: Feed variables using data base data

    this.image = "https://www.mapatisserie.net/wp-content/uploads/2020/05/gateau-au-yaourt-super-juteux-768x432.jpg";
    this.imageTitle = "Yogurt Cake";

    this.preparationTime = 15;
    this.cookingTime.push(25,30);
    this.difficulty = 2;

  }

  getRecipeData(): void {

  }


}
