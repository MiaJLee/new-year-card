type Card = 'bunnya' | 'bunnyb' | 'bunnyc' | 'cloud' | 'heart' | 'oval';
type Lettering = 'happyNewYear' | 'saeHaeBok';
type Background = 'white' | 'orange' | 'black' | 'gradient' | 'checker';
type Effect = 'none' | 'snow' | 'circles' | 'confetti' | 'kirakira';

interface postCardReq {
  shape: Card;
  lettering: Lettering;
  background: Background;
  effect: Effect;
  text: string;
  musicId: string;
  sender: string;
  receiver: string;
}

interface postCardRes {
  message: string;
  cardId: string;
}

interface getCardReq {
  cardId: string;
}

interface getCardRes {
  shape: Card;
  lettering: Lettering;
  background: Background;
  effect: Effect;
  text: string;
  musicId: string;
  sender: string;
  receiver: string;
  cardId: string;
}

export { postCardReq, postCardRes, getCardReq, getCardRes };
