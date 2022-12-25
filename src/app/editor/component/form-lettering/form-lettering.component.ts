import { Component, Input } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'form-lettering',
  templateUrl: './form-lettering.component.html',
  styleUrls: ['./form-lettering.component.scss'],
})
export class FormLetteringComponent {
  @Input() controlName: string = '';
  ctrl = new FormControl('');

  constructor(private rootFormGroup: FormGroupDirective) {
    this.ctrl.setValue(this.rootFormGroup.control.value.lettering);

    this.ctrl.valueChanges.pipe(untilDestroyed(this)).subscribe((v) => {
      this.rootFormGroup.control.get(this.controlName)?.setValue(v);
      console.log(v);
    });
  }
}
