import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { TvDramaComponent } from './tv-drama/tv-drama.component';
import { ExcitingMovieComponent } from './exciting-movie/exciting-movie.component';
import { FooterComponent } from './footer/footer.component';
import { LatestMovieComponent } from './latest-movie/latest-movie.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { LatestMovieListComponent } from './latest-movie/latest-movie-list/latest-movie-list.component';
import { ExcitingMovieListComponent } from './exciting-movie/exciting-movie-list/exciting-movie-list.component';
import { TvDramaListComponent } from './tv-drama/tv-drama-list/tv-drama-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    TvDramaComponent,
    ExcitingMovieComponent,
    FooterComponent,
    LatestMovieComponent,
    LatestMovieListComponent,
    ExcitingMovieListComponent,
    TvDramaListComponent,
  ],
  imports: [BrowserModule, IvyCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
