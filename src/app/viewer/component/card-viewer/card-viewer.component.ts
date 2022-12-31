import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../api/api.service';
import { find, get } from 'lodash-es';
import * as Models from '../../../../api/api.models';
import { PopupService } from '../../../popup/popup.service';
import { catchError, EMPTY } from 'rxjs';
import { isMobile as _isMobile } from '../../../app.utils';
import { Music } from '../../../app.models';
import { MUSICS } from '../../../app.value';

const MOCK_CARD = {
  background: 'black',
  // created_at: '20221224184412',
  effect: 'circles',
  lettering: 'happyNewYear',
  musicId: '4',
  receiver: '지형',
  sender: '먀먀',
  shape: 'cloud',
  text: '지형아 새해복 많이 받아 ! 우리 못 본지 오래됐다 ㅠ 항상 건강하길 기도해 아자아자 화이팅 아자아자앚아자아자아\n우리 못 본지 오래됐다 ㅠ 항상 건강하길 기도해 아자아자 화이팅 아자아자앚아자아자 \n 우리 못 본지 오래됐다 ㅠ 항상 건강하길 기도해 아자아자 화이팅 아자아자앚아자아자\n ',
  cardId: '63a6c9ec24495869cabce893',
} as Models.getCardRes;

type CardStatus = 'enveloped' | 'opening' | 'opened';

@Component({
  selector: 'app-card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.scss'],
})
export class CardViewerComponent {
  cardId: string;
  card?: Models.getCardRes;
  isPreview = false;
  isNewYear = false;
  isActiveFlip = false;
  cardStatus: CardStatus = 'enveloped';

  isMobile = _isMobile();

  get selectedMusic(): Music | undefined {
    return find(MUSICS, ({ id }) => id === parseInt(this.card?.musicId ?? '0'));
  }

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private popupService: PopupService,
    private router: Router
  ) {
    this.cardId = get(this.route.snapshot.params, 'id', '');

    if (this.cardId) {
      this.apiService
        .getCard(this.cardId)
        .pipe(
          catchError(() => {
            this.router.navigate(['/404'], { replaceUrl: true });

            return EMPTY;
          })
        )
        .subscribe((res) => {
          if (res.message === 'success') {
            this.isNewYear = true;
          }

          // @TODO 배포전 반드시 삭ㅈㅔ!!!!!!!!!
          // this.isNewYear = true;

          this.card = res.result;
          // @TODO 배포전 반드시 삭ㅈㅔ!!!!!!!!!
          // this.card = MOCK_CARD;
        });
    }

    if (location.href.includes('preview')) {
      this.isPreview = true;
    }
  }

  shareCard(): void {
    this.popupService.custom('link', {
      data: {
        cardId: this.cardId,
        sender: this.card?.sender,
        receiver: this.card?.receiver,
      },
    });
  }

  tryAgain(): void {
    this.popupService.confirm(
      `이 페이지를 벗어나면 다시 돌아올 수 없으니 ${
        this.isMobile ? '' : '\n'
      }링크를 기억해주세요.\n새로운 편지를 작성하시겠어요?`,
      {
        confirm: {
          fn: () => this.router.navigate(['/']),
        },
      }
    );
  }

  openCard(): void {
    if (!this.isNewYear) {
      this.popupService.alert(
        '2023년 1월 1일에 열어볼 수 있어요. \n새해 첫날 다시 만나요!'
      );

      return;
    }

    this.cardStatus = 'opening';

    setTimeout(() => {
      this.cardStatus = 'opened';
    }, 1000);
  }

  onToggleFlip(): void {
    this.isActiveFlip = !this.isActiveFlip;
  }
}
