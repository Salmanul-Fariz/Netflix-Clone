import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-tv-drama-list',
  templateUrl: './tv-drama-list.component.html',
  styleUrls: ['./tv-drama-list.component.css'],
})
export class TvDramaListComponent implements OnInit {
  tvDrama: object[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.tvDrama = this.movieService.showTvDrama();
  }
}
