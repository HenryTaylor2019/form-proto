import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DocStackComponent } from './doc-stack/doc-stack.component';

@NgModule({
  declarations: [DocStackComponent],
  imports: [CommonModule],
  exports: [DocStackComponent],
})
export class DocStackModule {}
