import {SET_LOADING_STATUS, SET_VALUE} from './types';
import {IAction} from '../types';

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
