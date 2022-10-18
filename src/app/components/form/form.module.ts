import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { UploadFileModule } from '../upload-file/upload-file.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, UploadFileModule],
  exports: [FormComponent],
})
export class FormModule {}
