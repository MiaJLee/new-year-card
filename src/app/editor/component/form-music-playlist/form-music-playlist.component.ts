import { Component, Input } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { MUSICS } from '../../../app.value';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { isMobile } from '../../../app.utils';
import { isNil, isEmpty } from 'lodash-es';
import { PopupService } from '../../../popup/popup.service';
import { Music } from '../../../app.models';

@UntilDestroy()
@Component({
  selector: 'form-music-playlist',
  templateUrl: './form-music-playlist.component.html',
  styleUrls: ['./form-music-playlist.component.scss'],
})
export class FormMusicPlaylistComponent {
  @Input() controlName = '';
  readonly musics: Music[] = MUSICS.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  get selectedId(): number | undefined {
    const selectedId = this.ctrl.value;

    if (!isNil(selectedId) && !isEmpty(selectedId)) {
      return parseInt(selectedId);
    }

    return;
  }

  playingMusic?: number;
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
    if (!this.showAlert) {
      this.popupService.confirm(
        `이 음악을 들어보시겠어요? ${
          isMobile() ? '\n나타나는 플레이어의 재생버튼을 탭해주세요.' : ''
        }`,
        {
          confirm: {
            fn: () => {
              this.showAlert = true;
              this.initYoutubePlayer(music.id);
            },
          },
        }
      );

      return;
    }

    this.initYoutubePlayer(music.id);
  }

  onClose() {
    this.playingMusic = undefined;
  }

  private initYoutubePlayer(musicId: number): void {
    this.playingMusic = undefined;

    // [workaround] youtube-player를 DOM에서 삭제 후 새로 그리기 위함.
    setTimeout(() => {
      this.playingMusic = musicId;
    }, 10);
  }
}
