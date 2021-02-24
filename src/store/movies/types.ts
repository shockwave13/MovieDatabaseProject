export const SET_VALUE_MOVIES = '@movies/set_value';
export const ADD_MOVIE_TO_FAVORITES = '@movies/set_add_movie_to_favorites';

export interface IMoviesStore {
  topRatedMovies: any;
  currentMovieDetails: any;
  currentMovieCredits: any;
  currentMovieVideos: any;
  favoritesMovies: Array<object>;
}
