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
          this.popupService.alert('???????????? ??????????????????.');
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
            '?????? ?????? ?????? ????????? ??????????????????. \n?????? ???????????? ????????? ????????? ??? ?????????.'
          );
          return;
        }
        this.currentStep$.next(Step.Text);
        break;

      case Step.Text:
        if (this.form.invalid) {
          if (this.validationAlertMessage()) {
            this.popupService.alert(
              `???, ${this.validationAlertMessage()} ???????????? ??? ?????????!`
            );

            return;
          }

          this.popupService.alert(
            '????????? ??????????????????. \n???????????? ?????? ??????????????????.'
          );

          return;
        }

        console.log(this.form.controls.text.value);
        this.currentStep$.next(Step.Preview);

        break;
    }
  }

  onSave(): void {
    // @TODO: ???????????????
    this.popupService.confirm(
      '????????? ????????? ????????? ????????? ??? ?????????.\n????????? ??????????????????????',
      {
        confirm: {
          text: '??????',
          fn: () =>
            this.apiService
              .postCard({ ...this.form.value })
              .pipe(
                switchMap((res) => {
                  if (res.cardId) {
                    this.popupService.alert(
                      '????????? ??????????????????! \n???????????? ???????????? ???????????? ?????????????',
                      {
                        confirm: {
                          text: '???????????????',
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
                      '????????? ??????????????????. \n????????? ?????? ??????????????????.'
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
      '???????????? ????????? ???????????? ?????????.\n ???????????? ??????????????????????',
      {
        confirm: {
          text: '???, ???????????????',
          fn: () => this.router.navigate(['/']),
        },
      }
    );
  }

  private validationAlertMessage(): string | undefined {
    const { sender, receiver, text, musicId, lettering } = this.form.controls;

    let invalidElement;

    if (receiver.invalid) {
      invalidElement = '?????? ???';
    } else if (text.invalid) {
      invalidElement = '??????';
    } else if (sender.invalid) {
      invalidElement = '????????? ???';
    } else if (musicId.invalid) {
      invalidElement = '??????';
    } else if (lettering) {
      invalidElement = '?????????';
    }

    return koreanSuffix(`${invalidElement}???(???)`);
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
      '?????? ?????? ?????? ????????? ????????????? \n?????? ????????? ??? ?????? ??????????????? \n????????? ??????????????????!'
    );
  }
}
