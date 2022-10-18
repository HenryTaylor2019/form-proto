import { createReducer, on } from '@ngrx/store';
import { Form } from 'src/app/models/form';
import { FormActions } from '../actions/action.types';

export interface FormState {
  forms: Form[];
  completed: boolean;
}

export const initialFormsState: FormState = {
  forms: [
    {
      title: 'Fact Sheet',
      details: 'Suspendisse potenti. Proin eleifend iaculis dolor porttitor facilisis. Nunc efficitur eget mi eget fermentum. Cras venenatis mi in ipsum consectetur, vel porttitor odio accumsan. Ut sodales hendrerit dolor. In dolor nunc, feugiat quis ipsum eget, suscipit tempor lorem. Praesent vel lacinia nulla. Vivamus placerat dolor vitae augue sodales, quis finibus felis varius. Morbi bibendum tempor eros, pharetra volutpat mauris tempus at. Vestibulum porttitor consectetur mollis. In malesuada nibh ut ante pretium gravida. Vestibulum sollicitudin erat sapien, sed maximus felis pellentesque eu.',
      id: '12354'
    },
    {
      title: 'Card Information',
      details: 'Suspendisse potenti. Proin eleifend iaculis dolor porttitor facilisis. Nunc efficitur eget mi eget fermentum. Cras venenatis mi in ipsum consectetur, vel porttitor odio accumsan. Ut sodales hendrerit dolor. In dolor nunc, feugiat quis ipsum eget, suscipit tempor lorem. Praesent vel lacinia nulla. Vivamus placerat dolor vitae augue sodales, quis finibus felis varius. Morbi bibendum tempor eros, pharetra volutpat mauris tempus at. Vestibulum porttitor consectetur mollis. In malesuada nibh ut ante pretium gravida. Vestibulum sollicitudin erat sapien, sed maximus felis pellentesque eu.',
      id: '12354'
    },
    {
      title: 'Title',
      details: 'Maecenas nec enim at dolor lacinia elementum. In ut tortor non diam suscipit pharetra id vel justo. Mauris vestibulum arcu et nisi sagittis posuere. Donec iaculis felis at fringilla tristique. In interdum eleifend libero, ut viverra justo vulputate non. Sed iaculis volutpat mauris sed laoreet. Nullam mollis arcu quis lorem euismod ullamcorper. Curabitur placerat placerat lectus id sagittis. Etiam rutrum scelerisque est nec posuere.',
      id: '12354'
    },
    {
      title: 'Title',
      details: ' Vivamus vitae mauris non massa aliquet tincidunt non ac magna. Aliquam eleifend commodo mi ac pharetra. Aenean euismod id leo et molestie. Ut at pellentesque nibh. Sed odio elit, accumsan eget nibh eu, tincidunt scelerisque enim. Duis in lacus augue. Mauris rutrum vel sapien a congue.',
      id: '12354'
    },
  ],
  completed: false,
};

export const formsReducer = createReducer(
  initialFormsState,

  on(FormActions.formComplete, (state) => ({
    ...state,
    completed: true,
  })),

  on(FormActions.addForm, (state, action) => ({
    ...state,
    forms: [...state.forms, action.form],
    completed: true,
  }))
);

// export const metaReducers: MetaReducer<FormState>[] = !environment.production ? [] : [];
