import { Component } from '@angular/core';

@Component({
  selector: 'list-ingredients',
  templateUrl: './list-ingredients.component.html',
  styleUrls: ['./list-ingredients.component.scss']
})
export class ListIngredientsComponent {
  listIngredients: string[] = [];

  ngOnInit(): void{
    this.fillListIngredients();
    console.log("Composant liste ingrédients initialisé");
  }

  fillListIngredients() : void {
    this.listIngredients.push("Ingredient 1", "Ingredient 2", "Ingredient 3 ", "Ingredient 4", "Ingredient 5" );
  }
}
