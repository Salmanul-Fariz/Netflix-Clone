import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-exciting-movie-list',
  templateUrl: './exciting-movie-list.component.html',
  styleUrls: ['./exciting-movie-list.component.css'],
})
export class ExcitingMovieListComponent implements OnInit {
  excitingMovie: object[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.excitingMovie = this.movieService.showExcitingMovie();
  }
}
