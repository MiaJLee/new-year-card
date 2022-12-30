import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [PopupComponent],
	exports: [PopupComponent],
	imports: [CommonModule, SharedModule],
})
export class PopupModule {}
