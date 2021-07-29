import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { QuestionHomeProps } from '../types';

class QuestionHome extends Component<QuestionHomeProps> {
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

export default withRouter(QuestionHome);
