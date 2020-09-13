import {Action, ActionCreator} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {RootState} from '../root-reducer';

export enum Filter {
  characters = 'characters',
  locations = 'locations',
  episodes = 'episodes',
}

export interface SearcherState {
  activeFilter: Filter;
}

export const SET_FILTER = 'SET_FILTER';

export type AppThunk = ActionCreator<
  ThunkAction<void, RootState, null, Action<string>>
>;
