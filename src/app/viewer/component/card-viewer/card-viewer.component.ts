import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../../../api/api.service';
import { of, switchMap, EMPTY, Observable, BehaviorSubject } from 'rxjs';
import { has, isNil, get } from 'lodash-es';
import * as Models from '../../../../api/api.models';

@Component({
  selector: 'app-card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.scss'],
})
export class CardViewerComponent {
  cardId: string;
  card?: Models.getCardRes;
  isPreview: boolean = false;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.cardId = get(this.route.snapshot.params, 'id', '');

    if (this.cardId) {
      this.apiService.getCard(this.cardId).subscribe((res) => {
        this.card = res.result;
      });
    }

    if (location.href.includes('preview')) {
      this.isPreview = true;
    }
  }
}
