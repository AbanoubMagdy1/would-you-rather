import React, { Component } from 'react';
import { answerQuestion } from '../actions/shared';
import { Redirect, withRouter } from 'react-router-dom';
import { Form, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

class QuestionAnswer extends Component {
  state = {
    answer: '',
    isAnswered: false,
  };

  handleChange = e => {
    this.setState({ answer: e.target.value });
  };

  handleAnswer = e => {
    e.preventDefault();

    this.setState({ isAnswered: true });

    this.props.dispatch(
      answerQuestion(
        {
          authedUser: this.props.authed.id,
          qid: this.props.question.id,
          answer: this.state.answer,
        },
        () => this.props.history.push(`/result/${this.props.question.id}`)
      )
    );
  };

  render() {
    const { question, authed } = this.props;
    console.log(this.state.answer);
    return (
      <>
        {(!authed || Object.keys(authed.answers).includes(question.id)) && (
          <Redirect to="/" />
        )}
        <div className="question-body">
          <h6>Would you rather ..</h6>
          <Form onSubmit={this.handleAnswer}>
            <InputGroup className="p-2">
              <Form.Check
                type="radio"
                name="answer"
                value="optionOne"
                onClick={this.handleChange}
                label={question.optionOneText}
                required
              />
            </InputGroup>
            <InputGroup className="p-2">
              <Form.Check
                type="radio"
                name="answer"
                value="optionTwo"
                onClick={this.handleChange}
                label={question.optionTwoText}
                required
              />
            </InputGroup>
            <button
              className="button mt-5"
              to={`/answer/${question.id}`}
              disabled={this.state.isAnswered}
            >
              Answer
            </button>
          </Form>
        </div>
      </>
    );
  }
}
const mapStateToProps = ({ authed, users }) => ({
  authed: authed ? users[authed] : null,
});

export default withRouter(connect(mapStateToProps)(QuestionAnswer));
