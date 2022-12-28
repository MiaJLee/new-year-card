import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime } from 'rxjs';
import { LoadingScreenService } from '../../../services/loading-screen.service';

@UntilDestroy()
@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
})
export class LoadingScreenComponent {
  isLoading: boolean = true;

  constructor(private loadingScreenService: LoadingScreenService) {}

  ngOnInit() {
    this.loadingScreenService.loadingStatus
      .pipe(debounceTime(200), untilDestroyed(this))
      .subscribe((value: boolean) => {
        this.isLoading = value;
      });
  }
}
