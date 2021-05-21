export const formatQuestion = (question, author, authed) => {
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

export const calcPercentage = (numerator, denomerator) => {
  let percent = (numerator / denomerator) * 100;
  return {
    percent,
    text: `${percent.toFixed(1)}%`,
  };
};
