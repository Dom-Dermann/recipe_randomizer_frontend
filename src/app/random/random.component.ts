import { Recipe } from './../interface.recipe';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  animations: [
    trigger('loaded', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class RandomComponent implements OnInit {

  randomRecipe: String;
  isLoading = false;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  random() {
    this.isLoading = true;
    this.data.get_random_recipe().subscribe( (recipe: Recipe) => {
      this.randomRecipe = recipe[0].name;
    }, (err) => {
      console.log(err);
    }, () => {
      this.isLoading = false;
    });
  }

}
