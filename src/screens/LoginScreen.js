import React, { Component } from 'react';
import { loginAction } from '../actions/authed';
import { connect } from 'react-redux';
import { Form, Button, Image } from 'react-bootstrap';

class LoginScreen extends Component {
  state = {
    id: '',
  };

  handleChange = e => {
    this.setState({ id: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.state;
    if (this.state.id) {
      this.props.dispatch(loginAction(id));
    } else {
      alert('Please choose a user');
    }
  };

  componentDidMount = () => {
    if (this.props.authed) this.props.history.push('/');
  };

  componentDidUpdate = () => {
    if (this.props.authed) this.props.history.push('/');
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <h3>Login</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Choose a user</Form.Label>

            <Form.Control
              as="select"
              onChange={this.handleChange}
              className="my-3"
            >
              {Object.keys(users).map(id => (
                <React.Fragment>
                  <option
                    value={id}
                    key={id}
                    style={{ backgroundImage: users[id].avatarURL }}
                  >
                    {users[id].name}
                  </option>
                </React.Fragment>
              ))}
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ users, authed }) => ({ users, authed });

export default connect(mapStateToProps)(LoginScreen);
