import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environments';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private Http: HttpClient) { }

  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering)

    if(search) {
      params = new HttpParams().set('ordering', ordering).set('search', search)
    }

    return this.Http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    })
  }
}
