import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewlineToBrPipe } from './services/newlinetobr.pipe';
import { YoutubePlayerComponent } from './component/youtube-player/youtube-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BgCanvasComponent } from './component/bg-canvas/bg-canvas.component';
import { NgParticlesModule } from 'ng-particles';

@NgModule({
  declarations: [NewlineToBrPipe, YoutubePlayerComponent, BgCanvasComponent],
  exports: [NewlineToBrPipe, YoutubePlayerComponent, BgCanvasComponent],
  imports: [CommonModule, YouTubePlayerModule, NgParticlesModule],
})
export class SharedModule {}
