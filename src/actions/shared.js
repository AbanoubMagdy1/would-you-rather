import { getData } from '../utils/api';
import { _saveQuestionAnswer } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

const receiveUsersAction = users => ({
  type: RECEIVE_USERS,
  users,
});

const receiveQuestionsAction = questions => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

const answerQuestionAction = (authed, id, answer) => ({
  type: ANSWER_QUESTION,
  id,
  authed,
  answer,
});

export const receiveData = () => dispatch => {
  dispatch(showLoading());
  getData()
    .then(data => {
      dispatch(receiveUsersAction(data[0]));
      dispatch(receiveQuestionsAction(data[1]));
    })
    .finally(() => dispatch(hideLoading()));
};

export const answerQuestion =
  ({ authedUser, qid, answer }) =>
  dispatch => {
    dispatch(showLoading());
    _saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(answerQuestionAction(authedUser, qid, answer));
      })
      .finally(() => dispatch(hideLoading()));
  };
