import {combineReducers} from 'redux';

import appReducer from './app';
import moviesReducer from './movies';

const rootReducer = combineReducers({
  app: appReducer,
  movies: moviesReducer,
});

export default rootReducer;
