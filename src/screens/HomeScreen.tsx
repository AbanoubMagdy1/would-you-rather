import React, { Component } from 'react';
import Question from '../components/Question';
import QuestionHome from '../subcomponents/QuestionHome';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeScreen.css';

import { HomeProps, StoreState, AnswerCases } from '../types';

interface HomeState {
  active: AnswerCases;
}

class HomeScreen extends Component<HomeProps, HomeState> {
  state = { active: AnswerCases.Unanswered };

  changeQuestions = (option: AnswerCases) => {
    this.setState({ active: option });
  };

  render() {
    const { authed, questions } = this.props;
    const { active } = this.state;
    const answeredQuestions = !authed ? [] : Object.keys(authed.answers);
    const displayedQuestion = !authed
      ? questions
      : questions.filter(q => {
          const isAnswered = answeredQuestions.includes(q);
          return active === AnswerCases.Answered ? isAnswered : !isAnswered;
        });
    return (
      <>
        {!authed && <Redirect to="/login" />}
        <h1 className="text-center my-4">Would you rather</h1>
        <div className="home-container">
          <div className="btns-wrapper">
            <button
              className={`button ${
                active === AnswerCases.Unanswered ? 'active' : ''
              }`}
              onClick={() => this.changeQuestions(AnswerCases.Unanswered)}
            >
              Unanswered Questions
            </button>
            <button
              className={`button ${
                active === AnswerCases.Answered ? 'active' : ''
              }`}
              onClick={() => this.changeQuestions(AnswerCases.Answered)}
            >
              Answered Questions
            </button>
          </div>
          <div className="questions-wrapper">
            {displayedQuestion.map(q => (
              <Question key={q} id={q} QuestionSub={QuestionHome} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ authed, users, questions }: StoreState) => {
  return {
    questions: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    authed: authed ? users[authed] : null,
  };
};

export default connect(mapStateToProps)(HomeScreen);
