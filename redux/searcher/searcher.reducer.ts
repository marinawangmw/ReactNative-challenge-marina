import {Reducer} from 'redux';

import {Filter, SearcherState, SET_FILTER} from './searcher.types';

const initialData: SearcherState = {
  activeFilter: Filter.characters,
};

const reducer: Reducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {...state, activeFilter: action.payload};
    default:
      return action;
  }
};

export default reducer;
``;
