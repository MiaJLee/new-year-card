import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'form-card-bg',
  templateUrl: './form-card-bg.component.html',
  styleUrls: ['./form-card-bg.component.scss'],
})
export class FormCardBgComponent {
  @Input() controlName: string = '';
  ctrl = new FormControl('bg00');

  constructor(private rootFormGroup: FormGroupDirective) {
    this.ctrl.valueChanges.pipe(untilDestroyed(this)).subscribe((v) => {
      this.rootFormGroup.control.get(this.controlName)?.setValue(v);

      /**
       * @TODO 모션 그라데이션 적용하기
       * 피그마 링크 참고
       * 아래는 테스트 코드
       */
      let color = '#fff';

      (document.querySelector('html') as HTMLElement).style.background = color;

      if (v === 'bg01') {
        color =
          'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';
      } else {
        color =
          'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';
      }

      (document.querySelector('body') as HTMLElement).style.background = color;
    });
  }
}
