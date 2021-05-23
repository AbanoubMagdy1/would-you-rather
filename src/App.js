import React, { Component } from 'react';
//My components
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import QuestionScreen from './screens/QuestionScreen';
import NewQuestionScreen from './screens/NewQuestionScreen';
import LeaderBoardScreen from './screens/LeaderBoardScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
    const { authed } = this.props;
    return (
      <React.Fragment>
        <Navbar />
        <LoadingBar />
        <main>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/questions/:id" component={QuestionScreen} />
          <Route path="/leaderboard" component={LeaderBoardScreen} />
          <Route path="/add" component={NewQuestionScreen} />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(({ authed }) => ({ authed }))(App);
