import MovieRepository from '../database/repository/MovieRepository';

export default class MovieController {
  constructor() {
    this.repository = new MovieRepository();
  }
  addMovieReview(movie) {
    return this.repository.addMovieReview(movie);
  }
}
