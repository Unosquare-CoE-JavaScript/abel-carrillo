import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') slForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editedItemIndex: number;
    editedItem: Ingredient;
    /*     @ViewChild('nameInput')
    nameInputRef: ElementRef;
    @ViewChild('amountInput')
    amountInputRef: ElementRef; */
    /*     @Output()
    ingredientAdded = new EventEmitter<Ingredient>(); */

    constructor(
        private store: Store<fromApp.AppState>
    ) {}

    ngOnInit(): void {
        this.subscription = this.store
            .select('shoppingList')
            .subscribe((stateData) => {
                if (stateData.editedIngredientIndex > -1) {
                    this.editMode = true;
                    this.editedItem = stateData.editedIngredient;
                    this.editedItemIndex = stateData.editedIngredientIndex;
                    this.slForm.setValue({
                        name: this.editedItem.name,
                        amount: this.editedItem.amount,
                    });
                } else {
                    this.editMode = false;
                }
            });
    }

    onSubmit(form: NgForm) {
        /*      const name = this.nameInputRef.nativeElement.value;
        const amount = this.amountInputRef.nativeElement.value; */
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        if (this.editMode) {
            /*  this.shoppingListService.updateIngredient(
                this.editedItemIndex,
                newIngredient
            ); */

            this.store.dispatch(
                new ShoppingListActions.UpdateIgredient(newIngredient)
            );
        } else {
            //this.shoppingListService.addIngredient(newIngredient);
            this.store.dispatch(
                new ShoppingListActions.AddIngredient(newIngredient)
            );
        }
        this.editMode = false;
        form.reset();
        /*    this.ingredientAdded.emit(newIngredient); */
    }

    onDelete() {
        //this.shoppingListService.deleteIngredient(this.editedItemIndex);
        this.store.dispatch(new ShoppingListActions.DeleteIngredient());
        this.onClear();
    }

    onClear() {
        this.slForm.reset();
        this.editMode = false;
        this.store.dispatch(new ShoppingListActions.StOPEdit());
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.store.dispatch(new ShoppingListActions.StOPEdit());
    }
}