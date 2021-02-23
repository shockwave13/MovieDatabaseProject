import {SET_VALUE_MOVIES} from './types';
import {IAction} from '../types';
import API from 'api';
import {setLoading} from 'store/app';

export const setValueMovies = (field: string, value: any): IAction => ({
  type: SET_VALUE_MOVIES,
  payload: {
    field,
    value,
  },
});

export const getTopRatedMovies = (pageNumber: number = 1) => (
  dispatch: any,
) => {
  dispatch(setLoading(true));
  API.get(`/movie/top_rated?page=${pageNumber}`)
    .then((res) => {
      const {data} = res;
      dispatch(setValueMovies('topRatedMovies', data));
      console.log(data);
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
      console.log(data);
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
      console.log(data);
    })
    .catch((e) => {
      console.log('Error', e);
    })
    .finally(() => dispatch(setLoading(true)));
};
