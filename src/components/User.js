import React, { Component } from 'react';
import './User.css';

class User extends Component {
  render() {
    const { user, rank } = this.props;
    const questionLength = user.questions.length;
    const answerLength = Object.keys(user.answers).length;
    return (
      <div className="user" data-rank={rank}>
        <div className="user-img">
          <img src={user.avatarURL} alt={user.name} />
        </div>
        <div className="user-body">
          <p className="user-info">
            <span>Questions Asked :</span>
            <span className="num">{questionLength}</span>
          </p>
          <p className="user-info">
            <span>Questions Answered :</span>
            <span className="num">{answerLength}</span>
          </p>
        </div>
        <div className="user-score">
          <p className="score text-center my-0 py-2">Score</p>
          <p className="text-center my-0 py-2">
            {questionLength + answerLength}
          </p>
        </div>
      </div>
    );
  }
}

export default User;
