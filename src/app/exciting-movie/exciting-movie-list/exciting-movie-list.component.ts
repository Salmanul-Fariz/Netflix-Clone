import { Component } from '@angular/core';

@Component({
  selector: 'app-exciting-movie-list',
  templateUrl: './exciting-movie-list.component.html',
  styleUrls: ['./exciting-movie-list.component.css'],
})
export class ExcitingMovieListComponent {
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
