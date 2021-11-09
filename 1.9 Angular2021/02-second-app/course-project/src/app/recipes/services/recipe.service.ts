import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Recipe } from '../recipe.model';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    private recipes: Recipe[] = [
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

    recipeSelected = new EventEmitter<Recipe>();
    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); // return a copy
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingrediets: Ingredient[]) {
        this.slService.addIngredients(ingrediets);
    }
}
