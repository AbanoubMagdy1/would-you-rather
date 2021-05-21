import React, { Component } from 'react';
import Question from '../components/Question';
import QuestionAnswer from '../subcomponents/QuestionAnswer';

class AnswerScreen extends Component {
  render() {
    const { id } = this.props.match.params;
    return <Question key={id} id={id} QuestionSub={QuestionAnswer} />;
  }
}

export default AnswerScreen;
