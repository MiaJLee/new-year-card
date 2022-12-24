import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PostcardComponent } from './postcard/postcard.component';
import { PopupModule } from './popup/popup.module';
import { SharedModule } from './shared/shared.module';
import { EditorModule } from './editor/editor.module';
import { ViewerModule } from './viewer/viewer.module';

@NgModule({
  declarations: [AppComponent, LandingComponent, PostcardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopupModule,
    SharedModule,
    EditorModule,
    ViewerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
