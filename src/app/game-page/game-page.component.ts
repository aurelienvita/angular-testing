/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Game } from 'src/app/models/Game'
import { SteamIshService } from '../steam-ish.service'

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  public slug: string | null = ''
  public game: Game | null = null
  public error: any = null
  public loading = true

  constructor(
    private route: ActivatedRoute,
    private steamIshService: SteamIshService,
  ) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.steamIshService.getGame(this.slug as string)
      .subscribe(
        (res) => {
          this.game = res
          this.loading = false
        },
        (err) => {
          this.error = err
          this.loading = false
        },
      )
  }
}
