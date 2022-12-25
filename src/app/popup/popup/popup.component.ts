import { Component } from '@angular/core';
import { PopupOption } from '../../app.models';
import { Popup } from '../../app.value';
import { PopupService } from '../popup.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { environment } from '../../../environments/environment';

const KAKAO_SHARE_OPTION = {
  requestUrl: 'http://localhost:4200/', // 페이지 url
  templateId: 87695, // 메시지템플릿 번호
  templateArgs: {
    sender: '',
    cardId: '',
    receiver: '',
  },
};
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  content: string = '';
  option?: PopupOption;
  type: Popup = 'none';
  clipboardCopyed = false;

  constructor(
    private popupService: PopupService,
    private clipboard: Clipboard
  ) {
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

  onCopyClipboard(): void {
    const link = this.option?.data?.link ?? '복사';
    this.clipboard.copy(link);
    this.clipboardCopyed = true;
  }

  shareKakao(): void {
    const { Kakao } = window;

    // if (!Kakao.isInitialized()) {
    //   const apiKey = process.env.kakaoKey;
    //   Kakao.init(apiKey);

    //   Kakao.Link.sendScrap(KAKAO_SHARE_OPTION);
    // }
  }
}
