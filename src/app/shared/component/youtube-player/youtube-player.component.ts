import { Component, Input, OnInit } from '@angular/core';
import { Music } from '../../../app.models';
import { getUrlParameter, isMobile as _isMobile } from '../../../app.utils';
import { MUSICS } from '../../../app.value';

@Component({
	selector: 'app-youtube-player',
	templateUrl: './youtube-player.component.html',
})
export class YoutubePlayerComponent implements OnInit {
  @Input() musicId?: number;
  private apiLoaded = false;
  videoId?: string;
  musics = MUSICS;

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

  	if (!this.musicId) return;
  	const playMusic = this.musics.find(({ id }) => id === this.musicId);

  	if (!playMusic) return;
  	this.videoId = getUrlParameter(playMusic?.youtubeLink, 'v');
  }
}
