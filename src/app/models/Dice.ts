export default class Dice {
  private _value: number
  private _image: string
  constructor() {
    this._value = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    this._image = `/assets/dices/${this._value}.png`
  }

  get value(): number {
    return this._value
  }

  set value(value: number) {
    this._value = value
  }

  get image(): string {
    return this._image
  }

  set image(image: string) {
    this.image = image
  }
}
