import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SportsComponent } from './navigation/sports/sports.component';
import { SportComponent } from './tile/sport/sport.component';
import { PageComponent } from './navigation/page/page.component';
import { LeaguesComponent } from './layout/leagues/leagues.component';
import { FeaturedLeaguePrimaryComponent } from './tile/featured-league-primary/featured-league-primary.component';
import { FeaturedLeagueSecondaryComponent } from './tile/featured-league-secondary/featured-league-secondary.component';
import { LeagueComponent } from './tile/league/league.component';
import { HighlightComponent } from './tile/highlight/highlight.component';
import { HighlightsComponent } from './layout/highlights/highlights.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SportsComponent,
    SportComponent,
    PageComponent,
    LeaguesComponent,
    FeaturedLeaguePrimaryComponent,
    FeaturedLeagueSecondaryComponent,
    LeagueComponent,
    HighlightComponent,
    HighlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
