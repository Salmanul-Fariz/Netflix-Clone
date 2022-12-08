import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-movie-list',
  templateUrl: './latest-movie-list.component.html',
  styleUrls: ['./latest-movie-list.component.css'],
})
export class LatestMovieListComponent {
  images = [
    { path: '/assets/banner1.jpg' },
    { path: '/assets/banner1.jpg' },
    { path: '/assets/banner1.jpg' },
    { path: '/assets/banner1.jpg' },
    { path: '/assets/banner1.jpg' },
    { path: '/assets/banner1.jpg' },
    { path: '/assets/banner1.jpg' },
    { path: '/assets/banner1.jpg' },
    { path: '/assets/banner1.jpg' },
    { path: '/assets/banner1.jpg' },
  ];
}
