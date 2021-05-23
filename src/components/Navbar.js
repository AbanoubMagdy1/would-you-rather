import React, { Component } from 'react';
import { logoutAction } from '../actions/authed';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';

class Header extends Component {
  handleLogout = () => {
    this.props.dispatch(logoutAction());
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
            <LinkContainer to="/">
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

const mapStateToProps = ({ users, authed }) => ({
  authed: authed ? users[authed] : null,
});

export default withRouter(connect(mapStateToProps)(Header));
