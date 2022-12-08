export class MovieService {
  latestMovie: object[] = [
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

  excitingMovie: object[] = [
    { path: '/assets/banner2.jpg' },
    { path: '/assets/banner2.jpg' },
    { path: '/assets/banner2.jpg' },
    { path: '/assets/banner2.jpg' },
    { path: '/assets/banner2.jpg' },
    { path: '/assets/banner2.jpg' },
    { path: '/assets/banner2.jpg' },
    { path: '/assets/banner2.jpg' },
    { path: '/assets/banner2.jpg' },
    { path: '/assets/banner2.jpg' },
  ];

  tvDrama = [
    { path: '/assets/banner3.jpg' },
    { path: '/assets/banner3.jpg' },
    { path: '/assets/banner3.jpg' },
    { path: '/assets/banner3.jpg' },
    { path: '/assets/banner3.jpg' },
    { path: '/assets/banner3.jpg' },
    { path: '/assets/banner3.jpg' },
    { path: '/assets/banner3.jpg' },
    { path: '/assets/banner3.jpg' },
    { path: '/assets/banner3.jpg' },
  ];

  // display latest movie
  showLatestMovie() {
    return this.latestMovie;
  }

  // display Exciting movie
  showExcitingMovie() {
    return this.excitingMovie;
  }

  // display TV Drama movie
  showTvDrama() {
    return this.tvDrama;
  }
}
