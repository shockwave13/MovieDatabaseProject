import {SET_LOADING_STATUS, SET_VALUE} from './types';
import {IAction} from '../types';
import API, {setApiToken} from 'api';

export const setLoading = (status: boolean): IAction => ({
  type: SET_LOADING_STATUS,
  payload: status,
});

export const setValue = (field: string, value: any): IAction => ({
  type: SET_VALUE,
  payload: {
    field,
    value,
  },
});

export const getTopRatedMovies = () => (dispatch: any) => {
  // setApiToken();
  API.get(`/movie/top_rated`, {})
    .then((res) => {
      // const {data} = res.data;
      console.log(res);
    })
    .catch((e) => {
      console.log('Error', e);
    });
};
