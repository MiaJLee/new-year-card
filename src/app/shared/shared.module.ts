import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewlineToBrPipe } from './services/newlinetobr.pipe';

@NgModule({
  declarations: [NewlineToBrPipe],
  exports: [NewlineToBrPipe],
  imports: [CommonModule],
})
export class SharedModule {}
