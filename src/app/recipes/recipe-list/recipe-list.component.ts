import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://img.taste.com.au/4-rDZU7z/w643-h428-cfill-q90/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://img.taste.com.au/4-rDZU7z/w643-h428-cfill-q90/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
