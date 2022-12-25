export enum Step {
  Card = 'card',
  Background = 'background',
  Lettering = 'lettering',
  Music = 'music',
  Text = 'text',
  Preview = 'preview',
}

export type Title = {
  [K in Step]: {
    kr: string;
    en: string;
  };
};

export type Card = 'bunnya' | 'bunnyb' | 'bunnyc' | 'cloud' | 'heart' | 'oval';

export type Lettering = 'happyNewYear' | 'saeHaeBok';

export type Background = 'white' | 'orange' | 'black' | 'gradient';

export type Effect = 'none' | 'snow' | 'circles' | 'confetti' | 'kirakira';

export type Popup = 'none' | 'alert' | 'confirm' | 'link';

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
    text?: string;
    fn?: () => any;
  };
  cancel?: {
    text?: string;
    fn?: () => any;
  };
  data?: any;
}

export interface CardDesignConfig {
  type: Card;
  width: number;
  positionX: {
    default: number;
    happyNewYear: number;
    saeHaeBok: number;
    flipped: number;
  };
}
