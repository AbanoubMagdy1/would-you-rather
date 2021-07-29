import { _getQuestions, _getUsers } from './_DATA';
import { Users, Questions } from '../types';

type Result = [Promise<Users>, Promise<Questions>];

export function getData() {
  let arr: Result = [_getUsers(), _getQuestions()];
  return Promise.all(arr);
}
