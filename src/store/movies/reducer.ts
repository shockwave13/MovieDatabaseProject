import {IMoviesStore, SET_VALUE_MOVIES, ADD_MOVIE_TO_FAVORITES} from './types';
import {IAction} from '../types';

const initState = {
  topRatedMovies: {},
  currentMovieDetails: {},
  currentMovieCredits: {},
  favoritesMovies: [],
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
