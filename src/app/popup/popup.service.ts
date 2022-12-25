import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PopupOption, Popup } from '../app.models';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  openPopup: EventEmitter<boolean> = new EventEmitter();

  private _popupType: Popup = 'none';
  private _content?: string;
  private _option: PopupOption = {};

  constructor() {}

  isOpen(): boolean {
    return this._popupType !== 'none';
  }

  getPopup(): Observable<{
    content: string;
    option: PopupOption;
    type: Popup;
  }> {
    return of({
      content: this._content ?? '테스트 메세지 입니다.',
      option: this._option,
      type: this._popupType,
    });
  }

  alert(content: string, option?: PopupOption): void {
    this._popupType = 'alert';
    this._setPopup(content, option);
  }

  confirm(content: string, option?: PopupOption): void {
    this._popupType = 'confirm';
    this._setPopup(content, option);
  }

  custom(type: Popup): void {
    this._popupType = type;
    this.openPopup.emit(this.isOpen());
  }

  close(): void {
    this._popupType = 'none';
    this._setPopup(undefined, {});
  }

  private _setPopup(content?: string, option?: PopupOption): void {
    this._content = content;

    if (option) {
      this._option = option;
    }

    this.openPopup.emit(this.isOpen());
  }
}
