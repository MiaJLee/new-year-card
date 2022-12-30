import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewerComponent } from './component/card-viewer/card-viewer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [CardViewerComponent],
	imports: [CommonModule, SharedModule],
})
export class ViewerModule {}
