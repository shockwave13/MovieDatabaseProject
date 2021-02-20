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

export const getTopRatedMovies = () => (dispatch: any) => {
  API.get(`/movie/top_rated`)
    .then((res) => {
      const {data} = res;
      dispatch(setValue('topRatedMovies', data));
      console.log(data);
    })
    .catch((e) => {
      console.log('Error', e);
    });
};
