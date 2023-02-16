import { Component, Input } from '@angular/core'
import type { Game } from 'src/app/models/Game'

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent {
  @Input()
  game!: Game
}
