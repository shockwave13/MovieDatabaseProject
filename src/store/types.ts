import {IAppStore} from './app/types';

export interface IAction {
  type: string;
  payload: any;
}

export interface IStore {
  app: IAppStore;
}

export interface IResponse {
  success: boolean;
  data: any[];
  message: string;
}
