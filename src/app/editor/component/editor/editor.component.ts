import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { Step } from '../../../app.value';
import { EDITOR_TITLE, MAX_LENGTH } from '../../../app.value';
import { PopupService } from '../../../popup/popup.service';

@UntilDestroy()
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements AfterViewInit {
  readonly step = Step;
  currentStep$ = new BehaviorSubject(Step.Card);

  title = EDITOR_TITLE;
  form: FormGroup;

  get bgColor() {
    return this.form.controls.background.value;
  }

  get bgEffect() {
    return this.form.controls.effect.value;
  }

  get cardShape() {
    return this.form.controls.shape.value;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private popupService: PopupService
  ) {
    this.form = this.fb.group({
      shape: 'rabbit01',
      lettering: 'happyNewYear', // @TODO default 줄건지 ?
      background: 'white',
      effect: 'none',
      text: ['', Validators.required],
      musicId: ['', Validators.required],
      sender: ['', Validators.required],
      reciever: ['', Validators.required],
    });

    this.form.controls.shape.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.shakeCard();
      });
  }

  ngAfterViewInit(): void {
    this.shakeCard();
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
      case Step.Music:
        this.currentStep$.next(Step.Background);
        break;
      case Step.Text:
        this.currentStep$.next(Step.Music);
        break;
      case Step.Preview:
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
        this.currentStep$.next(Step.Music);
        break;
      case Step.Music:
        if (this.form.controls.musicId.invalid) {
          this.popupService.alert(
            '받는 이를 위한 음악을 선택해주세요.\n 이미지를 클릭하면 미리 들어볼 수 있어요.'
          );
          return;
        }
        this.currentStep$.next(Step.Text);
        break;

      case Step.Text:
        if (this.form.invalid) {
          this.popupService.alert(
            `앗, ${this.validationAlertMessage()}를 깜빡하신 것 같아요!`
          );

          return;
        }
        this.currentStep$.next(Step.Preview);

        break;
    }
  }

  onSave(): void {
    this.popupService.confirm(
      '카드를 저장한 후에는 수정할 수 없어요.\n카드를 저장하시겠어요?',
      {
        confirm: {
          text: '저장',
          fn: () => {} /** 카드 POST API 호출 */,
        },
      }
    );
  }

  private goMain(): void {
    this.popupService.confirm(
      '작성중인 편지는 저장되지 않아요.\n 메인으로 돌아가시겠어요?',
      {
        confirm: {
          text: '네, 돌아갈게요',
          fn: () => this.router.navigate(['/']),
        },
      }
    );
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

  private shakeCard(): void {
    const cardElemenet = document.querySelector('.flip-card');

    cardElemenet?.classList.add('selected-motion');

    setTimeout(() => {
      cardElemenet?.classList.remove('selected-motion');
    }, 400);
  }
}