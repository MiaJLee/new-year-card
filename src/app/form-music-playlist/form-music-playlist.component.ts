import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { MUSICS } from '../app.value';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { getUrlParameter } from '../app.utils';

@UntilDestroy()
@Component({
  selector: 'form-music-playlist',
  templateUrl: './form-music-playlist.component.html',
  styleUrls: ['./form-music-playlist.component.scss'],
})
export class FormMusicPlaylistComponent {
  @Input() controlName: string = '';
  readonly musics = MUSICS;

  videoId?: string;

  ctrl = new FormControl('');

  constructor(private rootFormGroup: FormGroupDirective) {
    this.ctrl.valueChanges.pipe(untilDestroyed(this)).subscribe((v) => {
      this.rootFormGroup.control.get(this.controlName)?.setValue(v);
    });
  }

  selectMusic(music: any): void {
    this.videoId = undefined;
    this.ctrl.setValue(music.id);

    // [workaround] youtube-player를 DOM에서 삭제 후 새로 그리기 위함.
    setTimeout(() => {
      this.videoId = getUrlParameter(music.youtubeLink, 'v');
    }, 10);
  }

  onClose(e: any) {
    this.videoId = undefined;
  }
}
