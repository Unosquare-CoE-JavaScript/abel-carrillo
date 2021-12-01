import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    /*  private recipes: Recipe[] = [
        new Recipe(
            'Chicken quesadilla',
            'test',
            'https://www.inspiredtaste.net/wp-content/uploads/2021/05/Chicken-Quesadilla-Recipe-1200.jpg',
            [
                new Ingredient('Chicken', 0.4),
                new Ingredient('Tortilla', 1),
                new Ingredient('Cheese', 0.4),
            ]
        ),
        new Recipe(
            'Omelette',
            'This is a test',
            'https://www.seriouseats.com/thmb/rybdBzw-D5rA3qNey6RoUY3Egxk=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__02__20190122-souffle-omelet-vicky-wasik-15-5ed05b436c2c41668fe2c6cff4f783e0.jpg',
            [new Ingredient('Eggs', 3), new Ingredient('Cheese', 0.4)]
        ),
    ];
 */

    private recipes: Recipe[] = [];
    /*     recipeSelected = new Subject<Recipe>(); */
    constructor(
        private store: Store<fromApp.AppState>
    ) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice(); // return a copy
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        // this.slService.addIngredients(ingrediets);
        this.store.dispatch(
            new ShoppingListActions.AddIngredients(ingredients)
        );
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        console.log(newRecipe);

        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
