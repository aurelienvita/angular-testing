import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CourseComponent } from './course/course.component'
import { YahtzeeComponent } from './yahtzee/yahtzee.component'
import { HomeComponent } from './home/home.component';
import { GameCardComponent } from './game-card/game-card.component';
import { LoadingComponent } from './loading/loading.component';
import { GamePageComponent } from './game-page/game-page.component';
import { CommentItemComponent } from './comment-item/comment-item.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    YahtzeeComponent,
    HomeComponent,
    GameCardComponent,
    LoadingComponent,
    GamePageComponent,
    CommentItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
