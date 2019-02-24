import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './interface.recipe';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  recipe_url = 'https://recipe-randomizer.herokuapp.com';

  constructor(private client: HttpClient) { }

  get_all_recipes() {
    return this.client.get(this.recipe_url);
  }

  post_recipe(recipe) {
    return this.client.post(this.recipe_url + '/recipe', recipe);
  }

  get_random_recipe() {
    return this.client.get(this.recipe_url + '/random');
  }

  cooked(id) {
    return this.client.get(this.recipe_url + '/cooked/' + id);
  }
}
