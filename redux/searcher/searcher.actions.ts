import {AppThunk, Filter, SET_FILTER} from './searcher.types';

export const setFilterAction: AppThunk = (filter: Filter) => (dispatch) => {
  dispatch({
    type: SET_FILTER,
    payload: filter,
  });
};
