import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewlineToBrPipe } from './services/newlinetobr.pipe';
import { YoutubePlayerComponent } from './component/youtube-player/youtube-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BgCanvasComponent } from './component/bg-canvas/bg-canvas.component';
import { NgParticlesModule } from 'ng-particles';
import { CardObjectComponent } from './component/card-object/card-object.component';
import { LoadingScreenComponent } from './component/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    NewlineToBrPipe,
    YoutubePlayerComponent,
    BgCanvasComponent,
    CardObjectComponent,
    LoadingScreenComponent,
  ],
  exports: [
    NewlineToBrPipe,
    YoutubePlayerComponent,
    BgCanvasComponent,
    CardObjectComponent,
    LoadingScreenComponent,
  ],
  imports: [CommonModule, YouTubePlayerModule, NgParticlesModule],
})
export class SharedModule {}
