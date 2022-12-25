import { Component, Input } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { MUSICS } from '../../../app.value';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { getUrlParameter } from '../../../app.utils';
import { isNil, isEmpty } from 'lodash-es';

@UntilDestroy()
@Component({
  selector: 'form-music-playlist',
  templateUrl: './form-music-playlist.component.html',
  styleUrls: ['./form-music-playlist.component.scss'],
})
export class FormMusicPlaylistComponent {
  @Input() controlName: string = '';
  readonly musics = MUSICS;

  get selectedId(): number | undefined {
    const selectedId = this.ctrl.value;

    if (!isNil(selectedId) && !isEmpty(selectedId)) {
      return parseInt(selectedId);
    }

    return;
  }

  videoId?: string;
  ctrl = new FormControl('');

  constructor(private rootFormGroup: FormGroupDirective) {
    // @TODO 다시 돌아왔을때 부모 컴포넌트의 값을 받아올 수 있도록 해야함. 이외 모든 단계 마찬가지 (카드, 배경 선택)
    // this.ctrl.setValue(this.rootFormGroup.control.get(this.controlName)?.value);

    this.ctrl.setValue(this.rootFormGroup.control.value.musicId);
    this.ctrl.valueChanges.pipe(untilDestroyed(this)).subscribe((v) => {
      this.rootFormGroup.control.get(this.controlName)?.setValue(v);
    });
  }

  selectMusic(music: any): void {
    this.videoId = undefined;
    this.ctrl.setValue(music.id);

    // [workaround] youtube-player를 DOM에서 삭제 후 새로 그리기 위함.
    // @TODO: 모바일에서는 유튜브로 이동할지 묻는 팝업을 띄워야 한다.
    setTimeout(() => {
      this.videoId = getUrlParameter(music.youtubeLink, 'v');
    }, 10);
  }

  onClose() {
    this.videoId = undefined;
  }
}
