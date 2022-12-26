import { Component, Input, OnInit } from '@angular/core';
import { get, isEmpty } from 'lodash-es';

@Component({
  selector: 'card-object',
  templateUrl: './card-object.component.html',
  styleUrls: ['./card-object.component.scss'],
})
export class CardObjectComponent implements OnInit {
  @Input() cardType?: string;
  @Input() lettering: string = 'default';

  typeClassName?: string;
  letteringClassName: string = 'default';

  constructor() {}

  ngOnInit(): void {
    console.log(this.cardType);

    this.typeClassName = this.cardType;
    this.letteringClassName = isEmpty(this.lettering)
      ? 'default'
      : this.lettering;
  }

  objectLoaded(e: any) {
    const objectElement = get(e, ['path', 0]);
    const svgElement = objectElement?.contentDocument?.querySelector(
      'svg'
    ) as SVGGraphicsElement;
    const { x, y, width, height } = svgElement?.getBBox();
    const viewBox = svgElement?.getAttribute('viewBox');

    const viewBoxData = viewBox?.split(' ') as Array<string>;

    console.log(x, y, width, height);
    console.log(viewBoxData);

    // @TODO: 레터링 타입에 따라 다르게 주기...(각 타입별로 value로 만들기)
    const newWidth = parseInt(viewBoxData[2]) / 4;

    svgElement.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);

    console.log(this.letteringClassName);
    svgElement.classList.add(this.letteringClassName);
    console.log(svgElement);
    // this.viewBoxValue = `${x} ${y} ${width} ${height}`;
  }
}
