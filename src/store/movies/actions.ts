import {SET_VALUE_MOVIES} from './types';
import {IAction} from '../types';
import API from 'api';

export const setValue = (field: string, value: any): IAction => ({
  type: SET_VALUE_MOVIES,
  payload: {
    field,
    value,
  },
});

export const getTopRatedMovies = (pageNumber: number = 1) => (
  dispatch: any,
) => {
  API.get(`/movie/top_rated?page=${pageNumber}`)
    .then((res) => {
      const {data} = res;
      dispatch(setValue('topRatedMovies', data));
      console.log(data);
    })
    .catch((e) => {
      console.log('Error', e);
    });
};
