import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { EditorComponent } from './editor/editor.component';
import { PostcardComponent } from './postcard/postcard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCardShapeComponent } from './form-card-shape/form-card-shape.component';
import { FormCardBgComponent } from './form-card-bg/form-card-bg.component';
import { FormMusicPlaylistComponent } from './form-music-playlist/form-music-playlist.component';
import { NewlineToBrPipe } from './modules/newlinetobr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    EditorComponent,
    PostcardComponent,
    FormCardShapeComponent,
    FormCardBgComponent,
    FormMusicPlaylistComponent,
    NewlineToBrPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
