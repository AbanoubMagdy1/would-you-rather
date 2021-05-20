import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/shared';

export default function questionsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.id]: questionReducer(state[action.id], action),
      };
    default:
      return state;
  }
}

function questionReducer(state, action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.answer]: answerReducer(state[action.answer], action),
      };

    default:
      return state;
  }
}

function answerReducer(state, action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      return {
        ...state,
        votes: state.votes.concat([action.authed]),
      };

    default:
      return state;
  }
}
