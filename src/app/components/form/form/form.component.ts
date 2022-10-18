import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Form } from 'src/app/models/form';
import { FormActions } from 'src/app/store/actions/action.types';
import * as uuid from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public formOne: FormGroup;
  public jobTypes = ['Option 1', 'Option 2', 'Option 3'];
  private uuid!: string; 

  constructor(
    form: FormBuilder,
    private store: Store,
  ) {
    this.formOne = form.group({
      title: new FormControl(null, [Validators.required]),
      details: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.uuid = uuid.v4();
    this.createForm(this.formOne.value);
    this.formOne.reset();
  }

  public createForm(form: Form) {
    form.id = this.uuid
    this.store.dispatch(FormActions.addForm({ form: form }));
  }
}
