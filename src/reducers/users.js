import { RECEIVE_USERS, ANSWER_QUESTION } from '../actions/shared';

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };

    case ANSWER_QUESTION:
      return {
        ...state,
        [action.authed]: userReducer(state[authed]),
      };

    default:
      return state;
  }
}

function userReducer(state, action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.id]: action.answer,
        },
      };
  }
}
