import { createAction, props } from '@ngrx/store';
import { Form } from 'src/app/models/form';

export const addDocument = createAction(
  '[Form] Add Doc to Stack',
  props<{ document: Form }>()
);

export const addForm = createAction(
  '[Form] Add Form to Store',
  props<{ form: Form }>()
);

export const uploadImage = createAction(
  '[Form] Add Image to Form',
  props<{ imgSrc: string }>()
);

export const formComplete = createAction('[Form] Form Complete');
