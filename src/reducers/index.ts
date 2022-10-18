import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { formsReducer } from 'src/app/store/reducers/form.reducers';
import { environment } from 'src/environments/environment';

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  productsState: formsReducer,
};

// META REDUCERS
// They are called before all othe reducers

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    // console.log("state before: ", state);
    // console.log("action: ", action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
