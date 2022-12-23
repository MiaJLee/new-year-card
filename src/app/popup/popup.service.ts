import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Popup } from '../app.value';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  openPopup: EventEmitter<boolean> = new EventEmitter();

  private _popupType: Popup = 'none';
  private _content?: string;
  private _option: any;

  constructor() {}

  isOpen(): boolean {
    return this._popupType !== 'none';
  }

  getPopup(): Observable<{ content: string; option: any; type: Popup }> {
    return of({
      content:
        this._content ?? '저장 후에는 수정하실 수 없습니다.\n저장하시겠습니까?',
      option: this._option,
      type: this._popupType,
    });
  }

  alert(content: string, option?: any): void {
    this._popupType = 'alert';
    this._setPopup(content, option);
  }

  confirm(content: string, option?: any): void {
    this._popupType = 'confirm';
    this._setPopup(content, option);
  }

  close(): void {
    this._popupType = 'none';
    this.openPopup.emit(this.isOpen());
  }

  private _setPopup(content: string, option?: any): void {
    this._content = content;

    if (option) {
      this._option = option;
    }

    this.openPopup.emit(this.isOpen());
  }
}
