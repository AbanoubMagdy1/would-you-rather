import React, { Component } from 'react';
//My components
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AnswerScreen from './screens/AnswerScreen';
import ResultScreen from './screens/ResultScreen';
import LeaderBoardScreen from './screens/LeaderBoardScreen';
import Navbar from './components/Navbar';
//Actions
import { receiveData } from './actions/shared';
//Libraries
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(receiveData());
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <LoadingBar />
        <main>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/answer/:id" component={AnswerScreen} />
          <Route path="/result/:id" component={ResultScreen} />
          <Route path="/leaderboard" component={LeaderBoardScreen} />
        </main>
      </React.Fragment>
    );
  }
}

export default connect()(App);
