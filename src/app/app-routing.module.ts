import { NgModule } from '@angular/core'
import type { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'
import { CourseComponent } from './course/course.component'
import { GamePageComponent } from './game-page/game-page.component'
import { HomeComponent } from './home/home.component'
import { MapPageComponent } from './map-page/map-page.component'
import { YahtzeeComponent } from './yahtzee/yahtzee.component'

const routes: Routes = [
  { path: 'cours', component: CourseComponent },
  { path: 'yahtzee', component: YahtzeeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'game/:slug', component: GamePageComponent },
  { path: 'tests/map', component: MapPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
