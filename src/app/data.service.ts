import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './interface.recipe';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  recipe_url = 'http://localhost:3000';

  constructor(private client: HttpClient) { }

  get_all_recipes() {
    return this.client.get(this.recipe_url);
  }

  post_recipe(name) {
    const new_recipe: Recipe = {
      name: name
    };
    return this.client.post(this.recipe_url + '/recipe', new_recipe);
  }

  get_random_recipe() {
    return this.client.get(this.recipe_url + '/random');
  }
}
