import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';

@NgModule({
  declarations: [YoutubePlayerComponent],
  exports: [YoutubePlayerComponent],
  imports: [CommonModule, YouTubePlayerModule],
})
export class YoutubePlayerModule {}
