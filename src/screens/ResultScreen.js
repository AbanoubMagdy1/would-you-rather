import React, { Component } from 'react';
import Question from '../components/Question';
import QuestionResult from '../subcomponents/QuestionResult';

class ResultScreen extends Component {
  render() {
    const { id } = this.props.match.params;
    return <Question key={id} id={id} QuestionSub={QuestionResult} />;
  }
}

export default ResultScreen;
