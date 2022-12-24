import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './component/editor/editor.component';
import { FormCardShapeComponent } from './component/form-card-shape/form-card-shape.component';
import { FormCardBgComponent } from './component/form-card-bg/form-card-bg.component';
import { FormMusicPlaylistComponent } from './component/form-music-playlist/form-music-playlist.component';
import { SharedModule } from '../shared/shared.module';
import { PopupModule } from '../popup/popup.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditorComponent,
    FormCardShapeComponent,
    FormCardBgComponent,
    FormMusicPlaylistComponent,
  ],
  exports: [
    EditorComponent,
    FormCardShapeComponent,
    FormCardBgComponent,
    FormMusicPlaylistComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PopupModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EditorModule {}
