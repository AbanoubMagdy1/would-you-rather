import React, { Component } from 'react';
import { logoutAction } from '../actions/authed';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';

import { NavBarProps, LogoutAction, Users, Authed } from '../types';

class Header extends Component<NavBarProps> {
  handleLogout = () => {
    this.props.dispatch<LogoutAction>(logoutAction());
    this.props.history.push('/login');
  };

  render() {
    const { authed } = this.props;
    return (
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        collapseOnSelect
        className="p-3"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/" exact>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            {authed && (
              <LinkContainer to="/add">
                <Nav.Link>New Question</Nav.Link>
              </LinkContainer>
            )}
            {authed && (
              <LinkContainer to="/leaderboard">
                <Nav.Link>LeaderBoard</Nav.Link>
              </LinkContainer>
            )}

            {!authed && (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {authed && (
              <div className="nav-info">
                <Image
                  className="img"
                  src={authed.avatarURL}
                  alt={authed.name}
                  fluid
                />
                <span>{authed.name.split(' ')[0]}</span>
              </div>
            )}
            {authed && <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

interface ReduxConnect {
  users: Users;
  authed: Authed;
}

const mapStateToProps = ({ users, authed }: ReduxConnect) => ({
  authed: authed ? users[authed] : null,
});

export default withRouter(connect(mapStateToProps)(Header));
