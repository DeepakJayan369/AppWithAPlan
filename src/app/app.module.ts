import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HotStreakComponent } from './hot-streak/hot-streak.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HotStreakComponent,
    PageNotFoundComponent,
    HomeWelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    HomePageComponent, // Necessary, and does not come auto
    AppComponent      // Order is important, unless perhaps the others that are not used are removed
  ]
})
export class AppModule { }
