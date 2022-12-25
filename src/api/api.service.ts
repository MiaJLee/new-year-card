/* eslint-disable max-len, max-lines-per-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Models from './api.models';

const api = 'https://black-bunny-card.herokuapp.com';
// const api = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(protected http: HttpClient) {}

  postCard(body: Models.postCardReq): Observable<Models.postCardRes> {
    console.log('post');
    return this.http.request<Models.postCardRes>('post', `${api}/card`, {
      body,
    });
  }

  getCard(
    id: string | number
  ): Observable<{ message: string; result: Models.getCardRes }> {
    return this.http.request<{ message: string; result: Models.getCardRes }>(
      'get',
      `${api}/card/${id}`
    );
  }
}
