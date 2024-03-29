import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, catchError, EMPTY, filter, switchMap } from 'rxjs';
import { ApiService } from '../../../../api/api.service';
import { Music, Step } from '../../../app.models';
import {
  EDITOR_TITLE,
  MAX_LENGTH,
  MOCK_CARD,
  MUSICS,
} from '../../../app.value';
import { PopupService } from '../../../popup/popup.service';
import { length, limit } from 'stringz';
import { find } from 'lodash-es';
import { focusOnWriting, koreanSuffix } from '../../../app.utils';

@UntilDestroy()
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements AfterViewInit, OnDestroy {
  readonly step = Step;
  readonly title = EDITOR_TITLE;
  currentStep$ = new BehaviorSubject(Step.Card);

  isActiveFlip = false;
  form: FormGroup;
  letterMaxLength = MAX_LENGTH;

  get bgColor() {
    return this.form.controls.background.value;
  }

  get bgEffect() {
    return this.form.controls.effect.value;
  }

  get cardShape(): { type: string; lettering: string } {
    const type = this.form.controls.shape.value;
    const lettering = this.form.controls.lettering.value;

    return { type, lettering };
  }

  get cardContent(): { sender: string; receiver: string; text: string } {
    const sender = this.form.controls.sender.value;
    const receiver = this.form.controls.receiver.value;
    const text = this.form.controls.text.value;

    return { sender, receiver, text };
  }

  get musicId(): number {
    return parseInt(this.form.controls.musicId.value, 10);
  }

  get currentLetterLength(): number {
    return length(this.form.controls.text.value);
  }

  get selectedMusic(): Music | undefined {
    return find(
      MUSICS,
      ({ id }) => id === parseInt(this.form.controls.musicId.value)
    );
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private popupService: PopupService,
    private apiService: ApiService
  ) {
    this.form = this.fb.group({
      shape: 'bunnya',
      lettering: ['default', [this.noDefaultValueValidator()]],
      background: 'white',
      effect: 'none',
      text: ['', Validators.required],
      musicId: ['', Validators.required],
      sender: ['', Validators.required],
      receiver: ['', Validators.required],
    });

    if (/Android/.test(navigator.appVersion)) {
      window.addEventListener('resize', focusOnWriting);
    }

    // this.form.patchValue(MOCK_CARD);

    this.form.controls.shape.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.shakeCard();
      });

    this.form.controls.lettering.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.shakeCard();
      });

    this.form.controls.text.valueChanges
      .pipe(
        filter((v) => length(v) > this.letterMaxLength),
        untilDestroyed(this)
      )
      .subscribe((v) => {
        this.form.controls.text.patchValue(limit(v, MAX_LENGTH));
      });

    this.currentStep$.pipe(untilDestroyed(this)).subscribe((s) => {
      if (s !== Step.Preview) {
        this.isActiveFlip = false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.shakeCard();
  }

  ngOnDestroy(): void {
    if (/Android/.test(navigator.appVersion)) {
      window.removeEventListener('resize', focusOnWriting);
    }
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
        if (this.form.controls.lettering.invalid) {
          this.popupService.alert('레터링을 선택해주세요.');
          return;
        }
        this.currentStep$.next(Step.Background);
        break;
      case Step.Background:
        this.currentStep$.next(Step.Music);
        break;
      case Step.Music:
        if (this.form.controls.musicId.invalid) {
          this.popupService.alert(
            '받는 이를 위한 음악을 선택해주세요. \n재생 아이콘을 탭하여 들어볼 수 있어요.'
          );
          return;
        }
        this.currentStep$.next(Step.Text);
        break;

      case Step.Text:
        if (this.form.invalid) {
          if (this.validationAlertMessage()) {
            this.popupService.alert(
              `앗, ${this.validationAlertMessage()} 깜빡하신 것 같아요!`
            );

            return;
          }

          this.popupService.alert(
            '문제가 발생했습니다. \n처음부터 다시 시도해주세요.'
          );

          return;
        }

        console.log(this.form.controls.text.value);
        this.currentStep$.next(Step.Preview);

        break;
    }
  }

  onSave(): void {
    // @TODO: 에러핸들링
    this.popupService.confirm(
      '카드를 저장한 후에는 수정할 수 없어요.\n카드를 저장하시겠어요?',
      {
        confirm: {
          text: '저장',
          fn: () =>
            this.apiService
              .postCard({ ...this.form.value })
              .pipe(
                switchMap((res) => {
                  if (res.cardId) {
                    this.popupService.alert(
                      '카드가 저장되었어요! \n확인하고 친구에게 공유하러 가볼까요?',
                      {
                        confirm: {
                          text: '보러갈래요',
                          fn: () =>
                            this.router.navigate([
                              '/card',
                              res.cardId,
                              'preview',
                            ]),
                        },
                      }
                    );
                  }

                  return EMPTY;
                }),
                catchError((e) => {
                  this.popupService.alert(
                    e.errorMessage ??
                      '문제가 발생했습니다. \n나중에 다시 시도해주세요.'
                  );

                  return EMPTY;
                })
              )
              .subscribe(),
        },
      }
    );
  }

  onToggleFlip(): void {
    if (this.currentStep$.getValue() === this.step.Preview) {
      this.isActiveFlip = !this.isActiveFlip;
    }
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
    const { sender, receiver, text, musicId, lettering } = this.form.controls;

    let invalidElement;

    if (receiver.invalid) {
      invalidElement = '받는 이';
    } else if (text.invalid) {
      invalidElement = '편지';
    } else if (sender.invalid) {
      invalidElement = '보내는 이';
    } else if (musicId.invalid) {
      invalidElement = '음악';
    } else if (lettering) {
      invalidElement = '레터링';
    }

    return koreanSuffix(`${invalidElement}을(를)`);
  }

  private shakeCard(): void {
    const cardElemenet = document.querySelector('.flip-card');

    cardElemenet?.classList.add('selected-motion');

    setTimeout(() => {
      cardElemenet?.classList.remove('selected-motion');
    }, 400);
  }

  private noDefaultValueValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      if (value === 'default') {
        return { noDefaultValue: true };
      }

      return null;
    };
  }

  recommendMusic(): void {
    this.popupService.alert(
      '혹시 맘에 드는 음악이 없으세요? \n카드 완성한 후 메인 페이지에서 \n띵곡을 추천해주세요!'
    );
  }
}
