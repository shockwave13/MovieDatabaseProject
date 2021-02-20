import {createSelector} from 'reselect';
import {IMoviesStore} from './types';
import {IStore} from '../types';

export const getMoviesState = (state: IStore): IMoviesStore => state.movies;

export const selectTopRatedMovies = createSelector(
  [getMoviesState],
  (moviesState) => moviesState.topRatedMovies,
);
