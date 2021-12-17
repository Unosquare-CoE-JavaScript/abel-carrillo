import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/services/recipe.service';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    private url =
        'https://ng-course-recipe-book-7ac2b-default-rtdb.firebaseio.com/recipes.json';
    constructor(
        private http: HttpClient,
        private recipesService: RecipeService,
        private authService: AuthService,
        private store: Store<fromApp.AppState>
    ) {}

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http.put(this.url, recipes).subscribe((response) => {
            console.log(response);
        });
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>(this.url).pipe(
            map((recipes) => {
                return recipes.map((recipe) => {
                    return {
                        ...recipe,
                        ingredients: recipe.ingredients
                            ? recipe.ingredients
                            : [],
                    };
                });
            }),
            tap((recipes) => {
                //this.recipesService.setRecipes(recipes);
                this.store.dispatch(new RecipesActions.SetRecipes(recipes));
            })
        );
    }
}
