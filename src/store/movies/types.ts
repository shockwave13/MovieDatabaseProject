export const SET_VALUE_MOVIES = '@movies/set_value';
export const ADD_MOVIE_TO_FAVORITES = '@movies/set_add_movie_to_favorites';

interface ICurrentMovieVideos {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface IMoviesStore {
  //for example
  currentMovieVideos: Array<ICurrentMovieVideos>;
  //these interfaces should be like above
  topRatedMovies: any;
  currentMovieDetails: any;
  currentMovieCredits: any;
  favoritesMovies: any;
}
