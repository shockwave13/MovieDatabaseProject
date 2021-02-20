import {IAppStore, SET_LOADING_STATUS, SET_VALUE} from './types';
import {IAction} from '../types';

const initState = {
  loading: false,
};

const appReducer = (state = initState, action: IAction): IAppStore => {
  switch (action.type) {
    case SET_LOADING_STATUS: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SET_VALUE: {
      const {field, value} = action.payload;
      return {
        ...state,
        [field]: value,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
