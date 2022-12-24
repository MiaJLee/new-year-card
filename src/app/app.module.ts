import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PostcardComponent } from './postcard/postcard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupModule } from './popup/popup.module';
import { SharedModule } from './shared/shared.module';
import { EditorModule } from './editor/editor.module';

@NgModule({
  declarations: [AppComponent, LandingComponent, PostcardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopupModule,
    SharedModule,
    EditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
