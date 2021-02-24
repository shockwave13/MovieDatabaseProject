import {SET_VALUE_MOVIES} from './types';
import {IAction} from '../types';
import API from 'api';
import {setLoading} from 'store/app';
import {isAlreadyAddedToFavorites} from 'services/helpers';

export const setValueMovies = (field: string, value: any): IAction => ({
  type: SET_VALUE_MOVIES,
  payload: {
    field,
    value,
  },
});

export const getTopRatedMovies = (pageNumber: number = 1) => (
  dispatch: any,
  getState: any,
) => {
  dispatch(setLoading(true));
  API.get(`/movie/top_rated?page=${pageNumber}`)
    .then((res) => {
      const {data} = res;
      const {topRatedMovies} = getState().movies;
      const updatedArray = topRatedMovies.results.concat(data.results);
      dispatch(
        setValueMovies('topRatedMovies', {...data, results: updatedArray}),
      );
      // dispatch(dispatch(setValueMovies('topRatedMovies', data)));
    })
    .catch((e) => {
      console.log('Error', e);
    })
    .finally(() => dispatch(setLoading(false)));
};

export const getMovieDetails = (movieId: number) => (dispatch: any) => {
  dispatch(setLoading(true));
  API.get(`/movie/${movieId}`)
    .then((res) => {
      const {data} = res;
      dispatch(setValueMovies('currentMovieDetails', data));
    })
    .catch((e) => {
      console.log('Error', e);
    })
    .finally(() => dispatch(setLoading(true)));
};

export const getMovieCredits = (movieId: number) => (dispatch: any) => {
  API.get(`/movie/${movieId}/credits`)
    .then((res) => {
      const {data} = res;
      dispatch(setValueMovies('currentMovieCredits', data));
    })
    .catch((e) => {
      console.log('Error', e);
    })
    .finally(() => dispatch(setLoading(true)));
};

export const addMovieToFavorites = (newMovie: any) => (
  dispatch: any,
  getState: any,
) => {
  const {favoritesMovies} = getState().movies;
  const isAlreadyAdded = isAlreadyAddedToFavorites(
    favoritesMovies,
    newMovie.id,
  );
  if (!isAlreadyAdded) {
    const updatedArray = favoritesMovies.concat(newMovie);
    dispatch(setValueMovies('favoritesMovies', updatedArray));
  }
};

export const removeMovieFromFavorites = (movieId: number) => (
  dispatch: any,
  getState: any,
) => {
  const {favoritesMovies} = getState().movies;

  const updatedArray = favoritesMovies.filter(
    (item: any) => item.id !== movieId,
  );
  dispatch(setValueMovies('favoritesMovies', updatedArray));
};
