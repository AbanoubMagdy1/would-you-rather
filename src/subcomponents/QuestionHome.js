import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuestionHome extends Component {
  render() {
    const { question } = this.props;
    return (
      <div className="question-body">
        <p>
          {question.optionOneText} or {question.optionTwoText}?
        </p>
        <Link className="button" to={`/questions/${question.id}`}>
          {question.authedAnswer ? 'See Result' : 'Answer'}
        </Link>
      </div>
    );
  }
}

export default QuestionHome;
