import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  NEW_QUESTION,
} from '../actions/shared';

import {
  Questions,
  Question,
  Option,
  RecieveQuestionAction,
  AnswerQuestionAction,
  NewQuestionAction,
} from '../types';

type QuestionReducerAction =
  | RecieveQuestionAction
  | AnswerQuestionAction
  | NewQuestionAction;

export default function questionsReducer(
  state: Questions = {},
  action: QuestionReducerAction
) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.id]: questionReducer(state[action.id], action),
      };
    case NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: { ...action.question },
      };

    default:
      return state;
  }
}

function questionReducer(state: Question, action: AnswerQuestionAction) {
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

function answerReducer(state: Option, action: AnswerQuestionAction) {
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
