import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UploadFileComponent]
})
export class UploadFileModule { }
