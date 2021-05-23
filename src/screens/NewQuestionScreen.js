import React, { Component } from 'react';
import { createQuestion } from '../actions/shared';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

class NewQuestionScreen extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { authed } = this.props;
    this.props.dispatch(
      createQuestion({ optionOneText, optionTwoText, author: authed }, () =>
        this.props.history.push(`/`)
      )
    );
  };

  render() {
    return (
      <>
        {!this.props.authed && <Redirect to="/login?redirect=add" />}
        <div className="border border-dark p-3">
          <h2 className="text-center mb-3">Create your question</h2>
          <p>Would you rather ...</p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>First option:</Form.Label>
              <Form.Control
                name="optionOneText"
                placeholder="Enter you first option"
                onChange={this.handleChange}
                value={this.state.optionOneText}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Second option:</Form.Label>
              <Form.Control
                name="optionTwoText"
                placeholder="Enter you second option"
                onChange={this.handleChange}
                value={this.state.optionTwoText}
                required
              />
            </Form.Group>
            <Button
              className="my-3 w-100"
              type="submit"
              variant="primary"
              block
            >
              Create question
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

const mapStateToProp = ({ authed }) => ({ authed });

export default connect(mapStateToProp)(NewQuestionScreen);
