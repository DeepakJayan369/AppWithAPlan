import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxTimelineModule } from 'ngx-timeline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HotStreakComponent } from './hot-streak/hot-streak.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HotStreakComponent,
    PageNotFoundComponent,
    HomeWelcomeComponent,
    ThingsToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgxTimelineModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    HomePageComponent, // Necessary, and does not come auto
    AppComponent      // Order is important, unless perhaps the others that are not used are removed
  ]
})
export class AppModule { }
