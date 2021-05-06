import { RECEIVE_USERS } from '../actions/shared';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    default:
      return state;
  }
}
