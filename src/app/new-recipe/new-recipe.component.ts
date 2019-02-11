import { MainComponent } from './../main/main.component';
import { DataService } from './../data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  recipeForm: FormGroup;

  @Output() valueAdded = new EventEmitter();

  constructor(private fb: FormBuilder, private data: DataService) {
    this.recipeForm = this.fb.group({
      'name': ['', Validators.required]
    });
  }


  ngOnInit() {
  }

  saveRecipe() {
    this.data.post_recipe(this.recipeForm.value.name).subscribe( (r) => {
      console.log(r);
    },
    (err) => console.log(err),
    () => {
      this.valueAdded.emit(true);
    });
  }

}
