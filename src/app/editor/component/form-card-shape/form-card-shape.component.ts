import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'form-card-shape',
  templateUrl: './form-card-shape.component.html',
  styleUrls: ['./form-card-shape.component.scss'],
})
export class FormCardShapeComponent {
  @Input() controlName: string = '';
  ctrl = new FormControl('rabbit01');

  constructor(private rootFormGroup: FormGroupDirective) {
    this.ctrl.setValue(this.rootFormGroup.control.value.shape);

    this.ctrl.valueChanges.pipe(untilDestroyed(this)).subscribe((v) => {
      this.rootFormGroup.control.get(this.controlName)?.setValue(v);
    });
  }
}
