import { LOG_IN, LOG_OUT } from '../actions/authed';
import {
  RECEIVE_USERS,
  RECEIVE_QUESTIONS,
  NEW_QUESTION,
  ANSWER_QUESTION,
} from '../actions/shared';
import { ComponentType } from 'react';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { LoadingBarProps } from 'react-redux-loading-bar';

export type Authed = string | null;

export enum AnswerCases {
  Answered = 'answered',
  Unanswered = 'unanswered',
}

export type OptionCases = 'optionOne' | 'optionTwo';

// Data types
export interface User {
  id: string;
  name: string;
  avatarURL: string;
  answers: { [key: string]: string };
  questions: string[];
}

export interface Users {
  [key: string]: User;
}

export interface Option {
  votes: string[];
  text: string;
}

export interface Question {
  id: string;
  author: string;
  timestamp: number;
  optionOne: Option;
  optionTwo: Option;
}

export interface Questions {
  [key: string]: Question;
}

export interface FormattedQuestion {
  id: string;
  name: string;
  avatarURL: string;
  optionOneText: string;
  optionOneVotes: number;
  optionTwoText: string;
  optionTwoVotes: number;
  totalVotes: number;
  authedAnswer: string;
}

export interface StoreState {
  users: Users;
  questions: Questions;
  authed: Authed;
  loadingBar?: LoadingBarProps;
}

//Action Types

export interface LogoutAction {
  type: typeof LOG_OUT;
}

export interface LoginAction {
  type: typeof LOG_IN;
  id: string;
}

export interface RecieveUserAction {
  type: typeof RECEIVE_USERS;
  users: { [key: string]: User };
}

export interface RecieveQuestionAction {
  type: typeof RECEIVE_QUESTIONS;
  questions: { [key: string]: Question };
}

export interface AnswerQuestionAction {
  type: typeof ANSWER_QUESTION;
  id: string;
  authed: string;
  answer: OptionCases;
}

export interface NewQuestionAction {
  type: typeof NEW_QUESTION;
  question: Question;
}

export type StoreActions =
  | LoginAction
  | LogoutAction
  | RecieveQuestionAction
  | RecieveUserAction
  | NewQuestionAction
  | AnswerQuestionAction;

//Component Props
export interface AppProps {
  authed: Authed;
  dispatch: Dispatch<any>;
}

export interface HomeProps {
  questions: string[];
  authed: User | null;
}

export interface LoginScreenProps extends RouteComponentProps {
  users: Users;
  authed: Authed;
  dispatch: Dispatch<LoginAction>;
}

export interface LeaderScreenProps {
  users: User[];
  authed: Authed;
}

export interface NewQuestionScreenProps extends RouteComponentProps {
  authed: Authed;
  dispatch: Dispatch<any>;
}

export interface QuestionParams {
  id: string;
}

export interface QuestionScreenProps
  extends RouteComponentProps<QuestionParams> {
  isAnswered: boolean;
  authed: Authed;
}

export interface UserProps {
  user: User;
  rank: number;
}

export interface NavBarProps extends RouteComponentProps {
  authed: User | null;
  dispatch: Dispatch<LogoutAction>;
}

export interface QuestionAnswerProps extends RouteComponentProps {
  question: FormattedQuestion;
  authed: User | null;
  dispatch: Dispatch<any>;
}

//Home component and result component
export interface QuestionHomeProps extends RouteComponentProps {
  question: FormattedQuestion;
}

export interface QuestionProps {
  id: string;
  question: FormattedQuestion | null;
  QuestionSub: ComponentType<any>;
}
