import users from './users';
import questions from './questions';
import authed from './authed';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { combineReducers } from 'redux';

import { StoreState } from '../types';

export default combineReducers<StoreState>({
  users,
  questions,
  authed,
  loadingBar: loadingBarReducer,
});
