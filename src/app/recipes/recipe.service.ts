import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://img.taste.com.au/4-rDZU7z/w643-h428-cfill-q90/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://img.taste.com.au/4-rDZU7z/w643-h428-cfill-q90/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
