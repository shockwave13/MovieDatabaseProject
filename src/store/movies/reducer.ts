import {IMoviesStore, SET_VALUE_MOVIES} from './types';
import {IAction} from '../types';

const initState = {
  topRatedMovies: {},
};

const moviesReducer = (state = initState, action: IAction): IMoviesStore => {
  switch (action.type) {
    case SET_VALUE_MOVIES: {
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

export default moviesReducer;
