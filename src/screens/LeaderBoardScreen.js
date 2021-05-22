import React, { Component } from 'react';
import User from '../components/User';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class LeaderBoardScreen extends Component {
  render() {
    const { users, authed } = this.props;
    return (
      <div>
        {!authed && <Redirect to="/" />}
        <h2 className="text-center my-4">Leaderboard</h2>
        {users.map((user, i) => (
          <User key={user.id} user={user} rank={i + 1} />
        ))}
      </div>
    );
  }
}

const sortUsers = (a, b) => {
  return (
    b[1].questions.length +
    Object.keys(b[1].answers).length -
    (a[1].questions.length + Object.keys(a[1].answers).length)
  );
};

const mapStateToProps = ({ users, authed }) => {
  const usersList = Object.entries(users);
  const sortedUsers = usersList.sort(sortUsers);
  return { users: sortedUsers.map(user => user[1]), authed };
};

export default connect(mapStateToProps)(LeaderBoardScreen);
