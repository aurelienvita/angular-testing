import { Component } from '@angular/core'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  public compteur = 0

  incrementCompteur(increment: number): void {
    this.compteur = this.compteur + increment
  }

  resetCompteur(): void {
    this.compteur = 0
  }

  getColorCompteur(): string {
    if (this.compteur === 0)
      return 'yellow'
    else if (this.compteur >= 1)
      return '#009c29'
    else
      return '#ab000f'
  }
}
