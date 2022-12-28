import { Component } from '@angular/core';
import { PopupOption, Popup } from '../../app.models';
import { PopupService } from '../popup.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { ActivatedRoute } from '@angular/router';
import { get } from 'lodash-es';
import { KAKAO_TEMPLATE_ID } from '../../app.value';
import { environment } from '../../../environments/environment';

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
  cardId: number;
  kakaoShareOption: unknown;

  constructor(
    private popupService: PopupService,
    private clipboard: Clipboard,
    private route: ActivatedRoute
  ) {
    this.cardId = get(this.route.snapshot.params, 'id', '');

    this.popupService.getPopup().subscribe(({ content, option, type }) => {
      this.content = content;
      this.option = option;
      this.type = type;
    });

    this.kakaoShareOption = {
      requestUrl: 'http://localhost:4200/', // 페이지 url
      templateId: KAKAO_TEMPLATE_ID, // 메시지템플릿 번호
      templateArgs: {
        SENDER: this.option?.data?.sender,
        CARD_ID: this.option?.data?.cardId,
        RECEIVER: this.option?.data?.receiver,
      },
    };
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
    const link = `${location.origin}/card/${this.option?.data?.cardId}` ?? '';
    this.clipboard.copy(link);
    this.clipboardCopyed = true;
  }

  shareKakao(): void {
    const { Kakao } = window;

    if (!Kakao.isInitialized()) {
      const apiKey = environment.KAKAO_APP_KEY;
      Kakao.init(apiKey);
    }
    Kakao.Link.sendScrap(this.kakaoShareOption);
  }
}
