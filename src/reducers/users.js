import {
  RECEIVE_USERS,
  ANSWER_QUESTION,
  NEW_QUESTION,
} from '../actions/shared';

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.authed]: userReducer(state[action.authed], action),
      };
    case NEW_QUESTION:
      return {
        ...state,
        [action.question.author]: userReducer(
          state[action.question.author],
          action
        ),
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
    case NEW_QUESTION:
      return {
        ...state,
        questions: state.questions.concat([action.question]),
      };

    default:
      return state;
  }
}
