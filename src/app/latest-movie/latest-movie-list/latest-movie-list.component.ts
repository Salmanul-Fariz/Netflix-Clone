import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-latest-movie-list',
  templateUrl: './latest-movie-list.component.html',
  styleUrls: ['./latest-movie-list.component.css'],
})
export class LatestMovieListComponent implements OnInit {
  latestMovie: object[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.latestMovie = this.movieService.showLatestMovie();
  }
}
