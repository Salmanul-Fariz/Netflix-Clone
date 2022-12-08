export class MovieService {
  latestMovie: object[] = [
    { path: '/assets/latest1.jpg' },
    { path: '/assets/latest2.jpg' },
    { path: '/assets/latest3.jpg' },
    { path: '/assets/latest4.jpg' },
    { path: '/assets/latest5.jpg' },
    { path: '/assets/latest6.jpg' },
    { path: '/assets/latest7.jpg' },
    { path: '/assets/latest8.jpg' },
    { path: '/assets/latest5.jpg' },
    { path: '/assets/latest3.jpg' },
  ];

  excitingMovie: object[] = [
    { path: '/assets/image1.jpg' },
    { path: '/assets/image2.jpg' },
    { path: '/assets/image6.jpg' },
    { path: '/assets/image5.jpg' },
    { path: '/assets/image3.jpg' },
    { path: '/assets/image1.jpg' },
    { path: '/assets/image3.jpg' },
    { path: '/assets/image7.jpg' },
    { path: '/assets/image4.jpg' },
    { path: '/assets/image1.jpg' },
  ];

  tvDrama = [
    { path: '/assets/image8.jpg' },
    { path: '/assets/image9.jpg' },
    { path: '/assets/latest6.jpg' },
    { path: '/assets/latest3.jpg' },
    { path: '/assets/latest4.jpg' },
    { path: '/assets/latest1.jpg' },
    { path: '/assets/image4.jpg' },
    { path: '/assets/image2.jpg' },
    { path: '/assets/image3.jpg' },
    { path: '/assets/image7.jpg' },
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
