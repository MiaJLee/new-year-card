import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../api/api.service';
import { get } from 'lodash-es';
import * as Models from '../../../../api/api.models';
import { PopupService } from '../../../popup/popup.service';
import { catchError, EMPTY } from 'rxjs';
import { isMobile } from '../../../app.utils';

const MOCK_CARD = {
  background: 'white',
  // created_at: '20221224184412',
  effect: 'confetti',
  lettering: 'happyNewYear',
  musicId: '4',
  receiver: '지형',
  sender: 'ㅁㅣ아',
  shape: 'bunnya',
  text: '지형아 새해복 많이 받아 ! 우리 못 본지 오래됐다 ㅠ 항상 건강하길 기도해 아자아자 화이팅 아자아자앚아자아자아',
  cardId: '63a6c9ec24495869cabce893',
} as Models.getCardRes;

@Component({
  selector: 'app-card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.scss'],
})
export class CardViewerComponent {
  cardId: string;
  card?: Models.getCardRes;
  isPreview: boolean = false;
  isNewYear = false;

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
          if (res.message === 'notyet') {
            console.log(res.message);
            this.isNewYear === false;
          }
          this.card = res.result;
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
        isMobile() ? '' : `\n`
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
        '2023년 1월 1일 자정에 열어볼 수 있어요. \n새해 첫날 다시 만나요!'
      );

      return;
    }
  }
}
