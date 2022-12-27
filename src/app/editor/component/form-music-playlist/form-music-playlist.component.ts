import { Component, Input } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { MUSICS } from '../../../app.value';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { getUrlParameter, isMobile } from '../../../app.utils';
import { isNil, isEmpty } from 'lodash-es';
import { PopupService } from '../../../popup/popup.service';

@UntilDestroy()
@Component({
  selector: 'form-music-playlist',
  templateUrl: './form-music-playlist.component.html',
  styleUrls: ['./form-music-playlist.component.scss'],
})
export class FormMusicPlaylistComponent {
  @Input() controlName: string = '';
  readonly musics = MUSICS.sort((a, b) => a.name.localeCompare(b.name));

  get selectedId(): number | undefined {
    const selectedId = this.ctrl.value;

    if (!isNil(selectedId) && !isEmpty(selectedId)) {
      return parseInt(selectedId);
    }

    return;
  }

  videoId?: string;
  ctrl = new FormControl('');
  showAlert = false;

  get isMobileView(): boolean {
    return isMobile();
  }

  constructor(
    private rootFormGroup: FormGroupDirective,
    private popupService: PopupService
  ) {
    this.ctrl.setValue(this.rootFormGroup.control.value.musicId);
    this.ctrl.valueChanges.pipe(untilDestroyed(this)).subscribe((v) => {
      this.rootFormGroup.control.get(this.controlName)?.setValue(v);
    });
  }

  selectMusic(music: any): void {
    this.ctrl.setValue(music.id);
  }

  playMusic(music: any): void {
    // @TODO: 배포하고 리얼 환경에서 모바일 테스트 해보기
    // if (isMobile()) {
    //   if (this.showAlert) {
    //     this.openYoutube(music.youtubeLink);

    //     return;
    //   }

    //   this.popupService.confirm(
    //     '모바일에서는 유튜브에서 미리듣기가 가능해요.\n 이동하시겠어요?',
    //     {
    //       confirm: {
    //         fn: () => {
    //           this.showAlert = true;
    //           this.openYoutube(music.youtubeLink);
    //         },
    //       },
    //     }
    //   );

    //   return;
    // }

    if (!this.showAlert) {
      this.popupService.confirm('이 음악을 들어보시겠어요?', {
        confirm: {
          fn: () => {
            this.showAlert = true;
            this.initYoutubePlayer(music.youtubeLink);
          },
        },
      });

      return;
    }

    this.initYoutubePlayer(music.youtubeLink);
  }

  onClose() {
    this.videoId = undefined;
  }

  private initYoutubePlayer(link: string): void {
    this.videoId = undefined;

    // [workaround] youtube-player를 DOM에서 삭제 후 새로 그리기 위함.
    setTimeout(() => {
      this.videoId = getUrlParameter(link, 'v');
    }, 10);
  }

  private openYoutube(link: string): void {
    window.open(link, 'youtube');
  }
}
