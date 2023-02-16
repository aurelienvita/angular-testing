/* eslint-disable @typescript-eslint/consistent-type-imports */
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'
import { Game } from 'src/app/models/Game'
import { ListGames } from './models/ListGames'

@Injectable({
  providedIn: 'root',
})
export class SteamIshService {
  constructor(private httpclient: HttpClient) { }

  getListGames(_options: {} = {}): Observable<ListGames> {
    return this.httpclient.get<ListGames>(
      'https://steam-ish.test-02.drosalys.net/api/game',
      _options,
    )
  }

  getGame(slug: string, _options: {} = {}): Observable<Game> {
    return this.httpclient.get<Game>(
      `https://steam-ish.test-02.drosalys.net/api/game/${slug}`,
      _options,
    )
  }
}
