import { Recipe } from './../interface.recipe';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  randomRecipe: String;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  random() {
    this.data.get_random_recipe().subscribe( (recipe: Recipe) => {
      this.randomRecipe = recipe.name;
    });
  }

}
