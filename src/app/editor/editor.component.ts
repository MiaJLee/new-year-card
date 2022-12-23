import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { Step } from '../app.models';
import { EDITOR_TITLE, MAX_LENGTH } from '../app.value';
import { PopupService } from '../popup/popup.service';

@UntilDestroy()
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {
  readonly step = Step;
  currentStep$ = new BehaviorSubject(Step.Card);

  title = EDITOR_TITLE;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private popupService: PopupService
  ) {
    this.form = this.fb.group({
      shape: 'rabbit01',
      color: '',
      lettering: '',
      background: 'bg01',
      text: ['', Validators.required],
      musicId: '',
      sender: ['', Validators.required],
      reciever: ['', Validators.required],
    });

    this.form.controls.shape.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        const cardElemenet = document.querySelector('.flip-card');

        cardElemenet?.classList.add('selected-motion');

        setTimeout(() => {
          cardElemenet?.classList.remove('selected-motion');
        }, 400);
      });
  }

  onClickPrev(): void {
    switch (this.currentStep$.getValue()) {
      case Step.Card:
        this.goMain();
        break;
      case Step.Lettering:
        this.currentStep$.next(Step.Card);
        break;
      case Step.Background:
        this.currentStep$.next(Step.Lettering);
        break;
      case Step.Text:
        this.currentStep$.next(Step.Background);
        break;
      case Step.Music:
        this.currentStep$.next(Step.Text);
        break;
    }
  }

  onClickNext(): void {
    switch (this.currentStep$.getValue()) {
      case Step.Card:
        this.currentStep$.next(Step.Lettering);
        break;
      case Step.Lettering:
        this.currentStep$.next(Step.Background);
        break;
      case Step.Background:
        this.currentStep$.next(Step.Text);
        break;
      case Step.Text:
        if (this.form.invalid) {
          this.popupService.alert(
            `앗, ${this.validationAlertMessage()}를 깜빡하신 것 같아요!`
          );

          return;
        }

        this.currentStep$.next(Step.Music);
        break;
      case Step.Music:
      /**
       * 완성된 카드 미리보기 화면으로 이동
       */
    }
  }

  goMain(): void {
    /**
     *  @TODO 경고 얼럿 추가하기
     */
    this.router.navigate(['/']);
  }

  private validationAlertMessage(): string | undefined {
    const { sender, reciever, text } = this.form.controls;

    if (reciever.invalid) {
      return '받는 이';
    }

    if (text.invalid) {
      return '편지';
    }

    if (sender.invalid) {
      return '보내는 이';
    }
    return undefined;
  }
}
