import React, { Component } from 'react';
import Question from '../components/Question';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeScreen.css';

const cases = {
  answered: 'answered',
  unanswered: 'unanswered',
};

class HomeScreen extends Component {
  state = { active: cases.unanswered };

  changeQuestions = option => {
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
          return active === cases.answered ? isAnswered : !isAnswered;
        });
    return (
      <>
        {!authed && <Redirect to="/login" />}
        <div className="home-container">
          <div className="btns-wrapper">
            <button
              className={`button ${
                active === cases.unanswered ? 'active' : ''
              }`}
              onClick={() => this.changeQuestions('unanswered')}
            >
              Unanswered Questions
            </button>
            <button
              className={`button ${active === cases.answered ? 'active' : ''}`}
              onClick={() => this.changeQuestions('answered')}
            >
              Answered Questions
            </button>
          </div>
          <div className="questions-wrapper">
            {displayedQuestion.map(q => (
              <Question key={q} id={q} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ authed, users, questions }) => {
  return {
    questions: Object.keys(questions),
    authed: authed ? users[authed] : null,
  };
};

export default connect(mapStateToProps)(HomeScreen);
