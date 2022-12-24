import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewlineToBrPipe } from './services/newlinetobr.pipe';
import { YoutubePlayerComponent } from './component/youtube-player/youtube-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [NewlineToBrPipe, YoutubePlayerComponent],
  exports: [NewlineToBrPipe, YoutubePlayerComponent],
  imports: [CommonModule, YouTubePlayerModule],
})
export class SharedModule {}
