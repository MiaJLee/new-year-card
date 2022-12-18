import { Step } from './app.models';

export const EDITOR_TITLE = {
  [Step.Card]: { kr: '카드를 선택해주세요', en: 'Select a card' },
  [Step.Background]: { kr: '배경지를 선택해주세요', en: 'Select a background' },
  [Step.Lettering]: {
    kr: '레터링 이미지를 선택해주세요',
    en: 'Select a lettering',
  },
  [Step.Text]: { kr: '편지를 작성해주세요', en: 'Write a letter' },
  [Step.Music]: {
    kr: '희망찬 새해를 위한 첫 음악을 선물해주세요',
    en: 'Choose a new-year-song',
  },
};

export const MAX_LENGTH = 200;
