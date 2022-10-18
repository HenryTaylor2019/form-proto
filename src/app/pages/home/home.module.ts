import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayModule } from 'src/app/components/display/display.module';
import { UploadFileModule } from 'src/app/components/upload-file/upload-file.module';
import { FormModule } from '../../components/form/form.module';
import { MaterialModule } from '../../material.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormModule, MaterialModule, DisplayModule, UploadFileModule, FormsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
