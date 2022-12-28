import { Component, Input } from '@angular/core';
import { Background, Effect } from '../../../app.models';
import { loadFull } from 'tsparticles';
import { loadConfettiPreset } from 'tsparticles-preset-confetti';

@Component({
  selector: 'bg-canvas',
  templateUrl: './bg-canvas.component.html',
  styleUrls: ['./bg-canvas.component.scss'],
})
export class BgCanvasComponent {
  @Input() color: Background = 'white';
  @Input() effect: Effect = 'none';

  snowCount?: Array<number>;
  circleCount?: Array<number>;

  id = 'tsparticles';

  particlesOptions = {
    emitters: [
      {
        life: {
          count: 0,
        },
        position: {
          x: 0,
          y: 30,
        },
        particles: {
          move: {
            direction: 'top-right',
          },
        },
      },
      {
        life: {
          count: 0,
        },
        position: {
          x: 100,
          y: 30,
        },
        particles: {
          move: {
            direction: 'top-left',
          },
        },
      },
    ],
    preset: 'confetti',
  };

  constructor() {
    this.snowCount = Array(200)
      .fill(0)
      .map((_, i) => i);

    this.circleCount = Array(20)
      .fill(0)
      .map((_, i) => i);
  }

  particlesLoaded(_container: any): void {
  }

  async particlesInit(engine: any): Promise<void> {

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    await loadConfettiPreset(engine);
  }
}
