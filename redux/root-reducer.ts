import {combineReducers} from 'redux';

import searcherReducer from './searcher/searcher.reducer';

const rootReducer = combineReducers({
  searcher: searcherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
