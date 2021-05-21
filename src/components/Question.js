import React, { Component } from 'react';
import { formatQuestion } from '../utils/helpers';
import { connect } from 'react-redux';
import './Question.css';

class Question extends Component {
  render() {
    const { question, QuestionSub } = this.props;
    if (!question) return <h3>Question not found</h3>;
    return (
      <div className="question">
        <div className="question-img">
          <img src={question.avatarURL} alt={question.name} />
        </div>
        <div className="question-right">
          <h6 className="question-header">{question.name} asks ... ?</h6>
          <QuestionSub question={question} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authed, users }, { id }) => {
  const authedUser = authed ? users[authed] : null;
  const q = questions[id];
  return {
    question: q ? formatQuestion(q, users[q.author], authedUser) : null,
  };
};

export default connect(mapStateToProps)(Question);
