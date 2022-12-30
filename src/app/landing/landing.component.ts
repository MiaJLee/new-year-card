import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup/popup.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
	constructor() {}

	recommendMusic(): void {
		window.open('https://forms.gle/cktuNoGYFJdAsgfj8', 'music');
	}
}
