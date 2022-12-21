import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { MUSICS } from '../app.value';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'form-music-playlist',
  templateUrl: './form-music-playlist.component.html',
  styleUrls: ['./form-music-playlist.component.scss'],
})
export class FormMusicPlaylistComponent {
  readonly musics = MUSICS;
  @Input() controlName: string = '';

  ctrl = new FormControl('');

  constructor(private rootFormGroup: FormGroupDirective) {
    this.ctrl.valueChanges.pipe(untilDestroyed(this)).subscribe((v) => {
      this.rootFormGroup.control.get(this.controlName)?.setValue(v);
    });
  }

  selectMusic(id: number): void {
    this.rootFormGroup.control.get(this.controlName)?.setValue(id);
  }
}
