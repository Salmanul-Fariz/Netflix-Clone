import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { TvDramaComponent } from './tv-drama/tv-drama.component';
import { ExcitingMovieComponent } from './exciting-movie/exciting-movie.component';
import { FooterComponent } from './footer/footer.component';
import { LatestMovieComponent } from './latest-movie/latest-movie.component';
import { MovieListComponent } from './latest-movie/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    TvDramaComponent,
    ExcitingMovieComponent,
    FooterComponent,
    LatestMovieComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
