/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import { Observable, forkJoin } from 'rxjs'
import { ListGames } from '../models/ListGames'
import { SteamIshService } from '../steam-ish.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public latestGames: ListGames | null = null
  public gamesAsc: ListGames | null = null
  public gamesPriceDesc: ListGames | null = null
  public loading = true
  public error: any = null

  constructor(private steamIshService: SteamIshService) {

  }

  ngOnInit() {
    this.getData({
      params: {
        direction: 'ASC',
        limit: 6,
      },
    })

    const observableAll = forkJoin({
      sourceOne: this.getData({
        params: {
          sort: 'game.publishedAt',
          direction: 'DESC',
          limit: 6,
        },
      }),
      sourceTwo: this.getData({
        params: {
          sort: 'game.name',
          direction: 'ASC',
          limit: 6,
        },
      }),
      sourceThree: this.getData({
        params: {
          sort: 'game.price',
          direction: 'DESC',
          limit: 6,
        },
      }),
    })

    observableAll.subscribe(
      (res) => {
        this.latestGames = res.sourceOne
        this.gamesAsc = res.sourceTwo
        this.gamesPriceDesc = res.sourceThree
        this.loading = false
      },
      (err) => {
        this.error = err
        this.loading = false
      },
    )
  }

  getData(_options: {} = {}): Observable<ListGames> {
    this.error = null
    this.loading = true
    return this.steamIshService.getListGames(_options)
  }
}
