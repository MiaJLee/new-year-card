import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { get, isEmpty } from 'lodash-es';

@Component({
  selector: 'card-object',
  templateUrl: './card-object.component.html',
  styleUrls: ['./card-object.component.scss'],
})
export class CardObjectComponent implements OnInit, OnChanges {
  @Input() cardType?: string;
  @Input() lettering: string = 'default';

  typeClassName?: string;
  letteringClassName: string = 'default';

  private _svgElement?: SVGGraphicsElement;

  constructor() {}

  ngOnInit(): void {
    console.log(this.cardType);

    this.typeClassName = this.cardType;
    this.letteringClassName = isEmpty(this.lettering)
      ? 'default'
      : this.lettering;
  }

  ngOnChanges(changes: SimpleChanges) {
    const { cardType, lettering } = changes;

    if (cardType) {
      this.typeClassName = cardType.currentValue;
    }

    if (lettering) {
      this.letteringClassName = lettering.currentValue;
      this._svgElement?.classList.replace(
        lettering.previousValue,
        lettering.currentValue
      );
    }
  }

  objectLoaded(e: any) {
    const objectElement = get(e, ['path', 0]);
    const svgElement = objectElement?.contentDocument?.querySelector(
      'svg'
    ) as SVGGraphicsElement;

    this._svgElement = svgElement;

    // 실제 엘리먼트가 존재하는 컨테이너를 확인
    // const { x, y, width, height } = svgElement?.getBBox();

    // console.log(this.cardType, x, y, width, height);

    // svgElement.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);
    svgElement.classList.add(this.letteringClassName);
  }
}
