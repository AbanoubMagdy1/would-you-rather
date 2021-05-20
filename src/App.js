import React, { Component } from 'react';
//My components
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
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
        <LoadingBar />
        <Navbar />
        <main>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
        </main>
      </React.Fragment>
    );
  }
}

export default connect()(App);
