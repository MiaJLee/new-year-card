export interface Music {
  id: number;
  name: string;
  artist: string;
  spotifyLink: string;
  image: string;
  lyrics: string;
  youtubeLink: string;
}

export interface PopupOption {
  confirm?: {
    text: string;
    fn: () => {};
  };
  cancel?: {
    text: string;
    fn: () => {};
  };
}
