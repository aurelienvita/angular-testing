import { NgModule } from '@angular/core'
import type { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'
import { CourseComponent } from './course/course.component'
import { YahtzeeComponent } from './yahtzee/yahtzee.component'

const routes: Routes = [
  { path: 'cours', component: CourseComponent },
  { path: 'yahtzee', component: YahtzeeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
