import React, { Component, FormEvent, MouseEvent } from 'react';
import { answerQuestion } from '../actions/shared';
import { Redirect, withRouter } from 'react-router-dom';
import { Form, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import { QuestionAnswerProps, Users, OptionCases } from '../types';

interface ComponentState {
  answer: OptionCases;
  isAnswered: boolean;
}

class QuestionAnswer extends Component<QuestionAnswerProps, ComponentState> {
  constructor(props: QuestionAnswerProps) {
    super(props);
    this.state = {
      answer: 'optionOne',
      isAnswered: false,
    };
  }

  handleChange = (e: MouseEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (value == 'optionOne' || value == 'optionTwo') {
      this.setState({ answer: value });
    }
  };

  handleAnswer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.setState({ isAnswered: true });
    if (this.props.authed) {
      this.props.dispatch(
        answerQuestion({
          authedUser: this.props.authed.id,
          qid: this.props.question.id,
          answer: this.state.answer,
        })
      );
    }
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
              disabled={this.state.isAnswered}
              type="submit"
            >
              Answer
            </button>
          </Form>
        </div>
      </>
    );
  }
}

interface ReduxConnect {
  authed: null | string;
  users: Users;
}

const mapStateToProps = ({ authed, users }: ReduxConnect) => ({
  authed: authed ? users[authed] : null,
});

export default withRouter(connect(mapStateToProps)(QuestionAnswer));
