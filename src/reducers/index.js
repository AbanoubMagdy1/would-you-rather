import users from './users';
import questions from './questions';
import authed from './authed';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { combineReducers } from 'redux';

export default combineReducers({
    users,
    questions,
    authed,
    loadingBar: loadingBarReducer,
});
