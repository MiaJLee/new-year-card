import { Component, Input, OnInit } from '@angular/core';
import { isMobile as _isMobile } from '../../../app.utils';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
})
export class YoutubePlayerComponent implements OnInit {
  @Input() videoId?: string;
  private apiLoaded = false;

  get isMobile(): boolean {
    return _isMobile();
  }

  ngOnInit() {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
