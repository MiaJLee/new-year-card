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
  backgroundCtrl = new FormControl('');
  effectCtrl = new FormControl();

  constructor(private rootFormGroup: FormGroupDirective) {
    this.backgroundCtrl.setValue(this.rootFormGroup.control.value.background);
    this.effectCtrl.setValue(this.rootFormGroup.control.value.effect);

    this.backgroundCtrl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((v) => {
        this.rootFormGroup.control.get('background')?.setValue(v);
      });
    this.effectCtrl.valueChanges.pipe(untilDestroyed(this)).subscribe((v) => {
      this.rootFormGroup.control.get('effect')?.setValue(v);
    });
  }
}
