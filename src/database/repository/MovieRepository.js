import SQLiteManager from '../SQLiteManager';

export default class MovieRepository {
  addMovieReview(movie) {
    return new Promise((resolve, reject) => {
      SQLiteManager.addMovieReview(movie)
        .then((sqlite) => {
          resolve(sqlite);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
