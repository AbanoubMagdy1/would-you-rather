import React, { Component } from 'react';
import UserComponent from '../components/User';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LeaderScreenProps, Users, User, Authed } from '../types';

class LeaderBoardScreen extends Component<LeaderScreenProps> {
  render() {
    const { users, authed } = this.props;
    return (
      <div>
        {!authed && <Redirect to="/login?redirect=leaderboard" />}
        <h2 className="text-center my-4">Leaderboard</h2>
        {users.map((user, i) => (
          <UserComponent key={user.id} user={user} rank={i + 1} />
        ))}
      </div>
    );
  }
}

type UserEntry = [string, User];

function sortUsers(a: UserEntry, b: UserEntry): number {
  return (
    b[1].questions.length +
    Object.keys(b[1].answers).length -
    (a[1].questions.length + Object.keys(a[1].answers).length)
  );
}

interface ReduxConnect {
  users: Users;
  authed: Authed;
}

const mapStateToProps = ({ users, authed }: ReduxConnect) => {
  const usersList = Object.entries(users);
  const sortedUsers = usersList.sort(sortUsers);
  return { users: sortedUsers.map(user => user[1]), authed };
};

export default connect(mapStateToProps)(LeaderBoardScreen);
