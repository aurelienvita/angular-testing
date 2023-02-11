import Dice from './Dice'

export default class Yahtzee {
  private _dices: Dice[] = []

  public get dices(): Dice[] {
    return this._dices
  }

  public set dices(value: Dice[]) {
    this._dices = value
  }

  public getSumDices(): number {
    let sum = 0
    for (let i = 0; i < this._dices.length; i++)
      sum = sum + this._dices[i].value
    return sum
  }

  public start(): void {
    this._dices = []
    for (let i = 0; i < 5; i++)
      this._dices[i] = new Dice()
  }
}
