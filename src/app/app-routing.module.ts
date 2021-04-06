import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { HotStreakComponent } from './hot-streak/hot-streak.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'Home', component: HomeWelcomeComponent},
  {path: ''    , component: HomeWelcomeComponent},
  {path: 'HotStreak', component: HotStreakComponent},
  {path: 'AngularWelcome', component: AppComponent},
  {path: '**'  , component: PageNotFoundComponent}  //Order of this last line is important
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
