export const formatQuestion = (question, author, authed) => {
  const { id, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;
  const authedAnswer = !authed
    ? ''
    : optionOne.votes.includes(authed.id)
    ? 'option1'
    : optionTwo.votes.includes(authed.id)
    ? 'option2'
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
