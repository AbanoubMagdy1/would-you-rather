import React, { Component } from 'react';
import Question from '../components/Question';
import QuestionAnswer from '../subcomponents/QuestionAnswer';
import QuestionResult from '../subcomponents/QuestionResult';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class AnswerScreen extends Component {
  render() {
    const { id } = this.props.match.params;
    const { isAnswered, authed } = this.props;

    return (
      <>
        {!authed && <Redirect to={`/login?redirect=questions/${id}`} />}
        <Question
          key={id}
          id={id}
          QuestionSub={isAnswered ? QuestionResult : QuestionAnswer}
        />
      </>
    );
  }
}

const mapStateToProps = ({ authed, questions, users }, { match }) => {
  const { id } = match.params;
  const question = questions[match.params.id];
  const authedUser = users[authed];
  const isAnswered =
    !authedUser || !question || !Object.keys(authedUser.answers).includes(id)
      ? false
      : true;
  return { isAnswered, authed };
};

export default connect(mapStateToProps)(AnswerScreen);
