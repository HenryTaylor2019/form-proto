import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Form } from 'src/app/models/form';
import { FormsSelectors } from '../selectors/form.selectors';

@Injectable({
  providedIn: 'root',
})
export class FormFacadeService {
  constructor(private store: Store) {}

  getAllProducts(): Observable<Form[]> {
    return this.store.select(FormsSelectors.selectForms);
  }
}
