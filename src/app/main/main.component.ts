import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Recipe } from '../interface.recipe';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  recipes: Array<Recipe>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getRecipes();
  }

  public getRecipes() {
    this.data.get_all_recipes().subscribe(  (data: Array<Recipe>) => {
      console.log(data);
      this.recipes = data;
    });
  }

  cookedThis(recipe) {
    this.data.cooked(recipe._id).subscribe( (data) => {
      console.log(data);
    }, (err) => console.log(err), () => {
      this.getRecipes();
    });
  }

}
