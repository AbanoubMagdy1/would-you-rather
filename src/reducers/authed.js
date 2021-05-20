import { LOG_IN, LOG_OUT } from '../actions/authed';

export default function authedReducer(state = null, action) {
  switch (action.type) {
    case LOG_IN:
      return action.id;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
}
