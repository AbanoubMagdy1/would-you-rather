import { Question, User } from '../types';

export const formatQuestion = (
  question: Question,
  author: User,
  authed: User | null
) => {
  const { id, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;
  const authedAnswer = !authed
    ? ''
    : optionOne.votes.includes(authed.id)
    ? 'optionOne'
    : optionTwo.votes.includes(authed.id)
    ? 'optionTwo'
    : '';
  return {
    id,
    name,
    avatarURL,
    optionOneText: optionOne.text,
    optionOneVotes: optionOne.votes.length,
    optionTwoText: optionTwo.text,
    optionTwoVotes: optionTwo.votes.length,
    totalVotes: optionOne.votes.length + optionTwo.votes.length,
    authedAnswer,
  };
};

export const calcPercentage = (numerator: number, denomerator: number) => {
  let percent = (numerator / denomerator) * 100;
  return {
    percent,
    text: `${percent.toFixed(1)}%`,
  };
};
