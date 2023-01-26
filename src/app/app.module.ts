import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PopupModule } from './popup/popup.module';
import { SharedModule } from './shared/shared.module';
import { EditorModule } from './editor/editor.module';
import { ViewerModule } from './viewer/viewer.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingScreenInterceptor } from './shared/services/loading.interceptor';
import { ClosingComponent } from './closing/closing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotFoundComponent,
    ClosingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopupModule,
    SharedModule,
    EditorModule,
    ViewerModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
