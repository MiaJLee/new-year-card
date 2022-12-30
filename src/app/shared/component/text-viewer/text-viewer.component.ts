import { Component, Input } from '@angular/core';
import { Music } from '../../../app.models';

@Component({
	selector: 'text-viewer',
	templateUrl: './text-viewer.component.html',
	styleUrls: ['./text-viewer.component.scss'],
})
export class TextViewerComponent {
  @Input() receiver = '';
  @Input() text = '';
  @Input() sender = '';
  @Input() music?: Music;
}
