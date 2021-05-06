import { _getQuestions, _getUsers } from './_DATA';

export function getData() {
  return Promise.all([_getUsers(), _getQuestions()]);
}
