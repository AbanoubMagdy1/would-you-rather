import { getData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

const receiveUsersAction = users => ({
  type: RECEIVE_USERS,
  users,
});

const receiveQuestionsAction = questions => ({
  type: RECEIVE_QUESTIONS,
  questions,
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
