import React, { Component } from 'react';
import { receiveData } from './actions/shared';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(receiveData());
  }

  render() {
    return (
      <React.Fragment>
        <LoadingBar
          style={{ position: 'absolute', top: '0', left: '0', right: '0' }}
        />
        <p>App is running</p>
      </React.Fragment>
    );
  }
}

export default connect()(App);
