import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators, compose } from 'redux';
import classnames from 'classnames/bind';
import * as AuthActions from '../reducers/auth';
import logo from '../assets/logo.svg';
import style from './App.css';

const cx = classnames.bind(style);

export class App extends PureComponent {
  render() {
    return (
      <div className={cx('App')}>
        <div className={cx('App-header')}>
          <img src={logo} className={cx('App-logo')} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={cx('App-intro')}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <code>
          <a href="https://github.com/appier/create-react-app" target="_blank">
            Appier Edition.
          </a>
        </code>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      auth: bindActionCreators(AuthActions, dispatch),
    },
  };
}

const enhanced = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
);
export default enhanced(App);
