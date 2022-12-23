import { Component } from '@angular/core';
import { Popup } from '../../app.value';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  content: string = '';
  option: any;
  type: Popup = 'none';

  constructor(private popupService: PopupService) {
    this.popupService.getPopup().subscribe(({ content, option, type }) => {
      this.content = content;
      this.option = option;
      this.type = type;
    });
  }

  onConfirm(): void {
    if (this.option?.confirm?.fn) {
      this.option.confirm.fn();
    }
    this.popupService.close();
  }

  onCancel(): void {
    if (this.option?.cancel?.fn) {
      this.option.cancel.fn();
    }
    this.popupService.close();
  }
}
