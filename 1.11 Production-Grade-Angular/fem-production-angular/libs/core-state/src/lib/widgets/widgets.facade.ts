import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromWidgets from './widgets.reducer';
import * as WidgetsSelectors from './widgets.selectors';

@Injectable()
export class WidgetsFacade {
  loaded$ = this.store.pipe(select(WidgetsSelectors.getWidgetsLoaded));
  allWidgets$ = this.store.pipe(select(WidgetsSelectors.getAllWidgets));
  selectedWidgets$ = this.store.pipe(select(WidgetsSelectors.getSelected));

  constructor(private store: Store<fromWidgets.WidgetsPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
