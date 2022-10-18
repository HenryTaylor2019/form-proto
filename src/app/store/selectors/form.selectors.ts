import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormState } from '../reducers/form.reducers';

// This arg is referering to the particular bit of state referenced in the global reducer. More useful
// When you have lots of state split across lots of components
export const selectFormsState = createFeatureSelector<FormState>("productsState");

export const selectForms = createSelector(
  selectFormsState,
  (state) => state.forms
);

export const FormsSelectors = {
  selectForms,
};



