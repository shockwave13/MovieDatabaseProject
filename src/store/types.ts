import {IAppStore} from './app/types';
import {IMoviesStore} from './movies/types';

export interface IAction {
  type: string;
  payload: any;
}

export interface IStore {
  app: IAppStore;
  movies: IMoviesStore;
}

export interface IResponse {
  success: boolean;
  data: any[];
  message: string;
}
