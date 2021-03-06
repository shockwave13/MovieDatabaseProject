import {createSelector} from 'reselect';
import {IMoviesStore} from './types';
import {IStore} from '../types';

export const getMoviesState = (state: IStore): IMoviesStore => state.movies;

export const selectTopRatedMovies = createSelector(
  [getMoviesState],
  (moviesState) => moviesState.topRatedMovies,
);

export const selectCurrentMovieDetails = createSelector(
  [getMoviesState],
  (moviesState) => moviesState.currentMovieDetails,
);

export const selectCurrentMovieCredits = createSelector(
  [getMoviesState],
  (moviesState) => moviesState.currentMovieCredits,
);

export const selectCurrentMovieVideos = createSelector(
  [getMoviesState],
  (moviesState) => moviesState.currentMovieVideos,
);

export const selectFavoritesMovies = createSelector(
  [getMoviesState],
  (moviesState) => moviesState.favoritesMovies,
);
