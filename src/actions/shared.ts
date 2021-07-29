import { getData } from '../utils/api';
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import {
  OptionCases,
  User,
  Users,
  Question,
  Questions,
  RecieveQuestionAction,
  RecieveUserAction,
  AnswerQuestionAction,
  NewQuestionAction,
} from '../types';
import { Dispatch } from 'redux';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const NEW_QUESTION = 'NEW_QUESTION';

const receiveUsersAction = (users: Users): RecieveUserAction => ({
  type: RECEIVE_USERS,
  users,
});

const receiveQuestionsAction = (
  questions: Questions
): RecieveQuestionAction => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

const answerQuestionAction = (
  authed: string,
  id: string,
  answer: OptionCases
): AnswerQuestionAction => ({
  type: ANSWER_QUESTION,
  id,
  authed,
  answer,
});

const questionAction = (question: Question): NewQuestionAction => ({
  type: NEW_QUESTION,
  question,
});

export const receiveData = () => (dispatch: Dispatch) => {
  dispatch(showLoading());
  getData()
    .then(data => {
      dispatch(receiveUsersAction(data[0]));
      dispatch(receiveQuestionsAction(data[1]));
    })
    .finally(() => dispatch(hideLoading()));
};

interface AnswerQuestionParams {
  authedUser: string;
  qid: string;
  answer: OptionCases;
}

export const answerQuestion =
  ({ authedUser, qid, answer }: AnswerQuestionParams) =>
  (dispatch: Dispatch) => {
    dispatch(showLoading());
    _saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(answerQuestionAction(authedUser, qid, answer));
      })
      .finally(() => dispatch(hideLoading()));
  };

interface CreateQuestionParam {
  optionOneText: string;
  optionTwoText: string;
  author: string;
}

export const createQuestion =
  (
    { optionOneText, optionTwoText, author }: CreateQuestionParam,
    cb: () => void
  ) =>
  (dispatch: Dispatch) => {
    dispatch(showLoading());
    _saveQuestion({ optionOneText, optionTwoText, author })
      .then(question => {
        dispatch(questionAction(question));
        if (cb) cb();
      })
      .finally(() => dispatch(hideLoading()));
  };
