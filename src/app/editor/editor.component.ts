import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';

enum Step {
  Card = 'card',
  Background = 'background',
  Lettering = 'lettering',
  Text = 'text',
  Music = 'music',
}

const TITLE = {
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

@UntilDestroy()
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {
  readonly step = Step;
  currentStep$ = new BehaviorSubject(Step.Card);

  title = TITLE;
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      shape: 'rabbit01',
      color: '',
      lettering: '',
      background: '',
      text: '',
      musicId: '',
      sender: '',
      reciever: '',
    });

    this.currentStep$
      .pipe(untilDestroyed(this))
      .subscribe((v) => console.log(v));
  }

  onClickPrev(): void {
    switch (this.currentStep$.getValue()) {
      case Step.Background:
        this.currentStep$.next(Step.Card);
        break;
      case Step.Lettering:
        this.currentStep$.next(Step.Background);
        break;
      case Step.Text:
        this.currentStep$.next(Step.Lettering);
        break;
      case Step.Music:
        this.currentStep$.next(Step.Text);
        break;
    }
  }

  onClickNext(): void {
    switch (this.currentStep$.getValue()) {
      case Step.Card:
        this.currentStep$.next(Step.Background);
        break;
      case Step.Background:
        this.currentStep$.next(Step.Lettering);
        break;
      case Step.Lettering:
        this.currentStep$.next(Step.Text);
        break;
      case Step.Text:
        this.currentStep$.next(Step.Music);
        break;
    }
  }

  onClickMain(): void {
    /**
     *  @TODO 경고 얼럿 추가하기
     */
    this.router.navigate(['/']);
  }
}
