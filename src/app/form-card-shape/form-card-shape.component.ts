import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-form-card-shape',
  templateUrl: './form-card-shape.component.html',
  styleUrls: ['./form-card-shape.component.scss'],
})
export class FormCardShapeComponent {
  @Input() formControlName: string = '';
  ctrl = new FormControl('rabbit01');

  @Output()
  cuChange = new EventEmitter<string>();

  constructor(private rootFormGroup: FormGroupDirective) {
    this.ctrl.valueChanges.pipe(untilDestroyed(this)).subscribe((v) => {
      this.rootFormGroup.control.get(this.formControlName)?.setValue(v);
    });
  }
}
