import React, { Component } from 'react';
import { calcPercentage } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
/*
id,
    name,
    avatarURL,
    optionOneText: optionOne.text,
    optionOneVotes: optionOne.votes.length,
    optionTwoText: optionTwo.text,
    optionTwoVotes: optionTwo.votes.length,
    totalVotes: optionOne.votes.length + optionTwo.votes.length,
    authedAnswer,*/

class QuestionResult extends Component {
  render() {
    const { question } = this.props;
    const {
      optionOneText,
      optionOneVotes,
      optionTwoText,
      optionTwoVotes,
      totalVotes,
      authedAnswer,
    } = question;
    const { percent: percent1, text: text1 } = calcPercentage(
      optionOneVotes,
      totalVotes
    );
    const { percent: percent2, text: text2 } = calcPercentage(
      optionTwoVotes,
      totalVotes
    );
    return (
      <div className="question-body">
        <h4>Results:</h4>
        <div className="question-result">
          <div
            className={`result-box ${
              authedAnswer === 'optionOne' ? 'your' : ''
            }`}
          >
            <p>Would you rather {optionOneText}?</p>
            <ProgressBar now={percent1} label={text1} variant="success" />
            <p className="votes text-center">
              {optionOneVotes} out of {totalVotes} votes
            </p>
          </div>
          <div
            className={`result-box ${
              authedAnswer === 'optionTwo' ? 'your' : ''
            }`}
          >
            <p>Would you rather {optionTwoText}?</p>
            <ProgressBar now={percent2} label={text2} variant="success" />
            <p className="votes text-center">
              {optionTwoVotes} out of {totalVotes} votes
            </p>
          </div>
        </div>
        <Link className="button mt-2" to={`/`}>
          Go back
        </Link>
      </div>
    );
  }
}

export default QuestionResult;
