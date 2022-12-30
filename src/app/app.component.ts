import { Component } from '@angular/core';
import { PopupService } from './popup/popup.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'new-year-card';
	isPopup = false;

	constructor(private popupService: PopupService) {
		this.popupService.openPopup
			.pipe(untilDestroyed(this))
			.subscribe((isOpen) => {
				this.isPopup = isOpen;
			});
	}
}
