import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements AfterViewInit, OnDestroy {
  currentDateTime: DateTime;
  targetDateTime: DateTime;
  difference?: number;

  @ViewChild('days', { static: true }) days?: ElementRef;
  @ViewChild('hours', { static: true }) hours?: ElementRef;
  @ViewChild('minutes', { static: true }) minutes?: ElementRef;
  @ViewChild('seconds', { static: true }) seconds?: ElementRef;

  constructor() {
    this.currentDateTime = DateTime.local().setZone('Asia/Seoul');
    this.targetDateTime = DateTime.fromISO('2023-01-01T00:00:00', {
      zone: 'Asia/Seoul',
    });
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();

      // !isNaN(this.days?.nativeElement.innerText)
      //   ? (this.days?.nativeElement.innerText = Math.floor(this.difference))
      //   : (this.days?.nativeElement.innerHTML = `<img src="https://i.gifer.com/VAyR.gif" />`);
    }, 1000);
  }

  ngOnDestroy() {}

  tickTock() {
    this.currentDateTime = DateTime.local().setZone('Asia/Seoul');

    const diff = this.targetDateTime.diff(this.currentDateTime, [
      'days',
      'hours',
      'minutes',
      'seconds',
    ]);
    const { days, hours, minutes, seconds } = diff.toObject(); // => {months: 0, days: 1, hours: 3, minutes: 13, seconds: 10}

    if (!this.days || !this.hours || !this.minutes || !this.seconds) return;

    this.days.nativeElement.innerText = days;
    this.hours.nativeElement.innerText = hours;
    this.minutes.nativeElement.innerText = minutes;
    this.seconds.nativeElement.innerText = Math.floor(seconds || 0);
  }
}
