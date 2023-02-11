import { Component } from '@angular/core'
import Dice from '../models/Dice'
import Yahtzee from '../models/Yahtzee'

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss'],
})
export class YahtzeeComponent {
  public yahtzee = new Yahtzee()
}
