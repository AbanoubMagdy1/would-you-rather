import React, { Component, FormEvent } from 'react';
import { loginAction } from '../actions/authed';
import { connect } from 'react-redux';
import { Form, Dropdown, Button, Image } from 'react-bootstrap';

import { LoginScreenProps, Users } from '../types';

class LoginScreen extends Component<LoginScreenProps> {
  state = {
    id: '',
  };

  handleChange = (id: string) => {
    this.setState({ id });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    const { search } = this.props.location;
    const redirect = search ? search.split('=')[1] : '';
    if (this.props.authed) this.props.history.push(`/${redirect}`);
  };

  render() {
    const { users } = this.props;
    return (
      <div className="border border-dark p-3">
        <h4 className="text-center mb-1">Welcome to would you rather game</h4>
        <h6 className="text-center mb-3">
          Please choose a user to start playing
        </h6>
        <Image
          className="d-block mx-auto my-5 img-login"
          src="https://tse4.mm.bing.net/th?id=OIP.b3kDLAq9vS0APl1nwmlXnAAAAA&pid=Api"
          alt="Would you rather"
          fluid
          rounded
        />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Dropdown className="my-3">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {this.state.id ? (
                  <>
                    <Image
                      className="img"
                      src={users[this.state.id].avatarURL}
                    />
                    {users[this.state.id].name}
                  </>
                ) : (
                  'Choose a user'
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {Object.keys(users).map(id => (
                  <Dropdown.Item onClick={() => this.handleChange(id)} key={id}>
                    <Image className="img" src={users[id].avatarURL} key={id} />
                    {users[id].name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit" block>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

interface ReduxConnect {
  users: Users;
  authed: string | null;
}

const mapStateToProps = ({ users, authed }: ReduxConnect) => ({
  users,
  authed,
});

export default connect(mapStateToProps)(LoginScreen);
