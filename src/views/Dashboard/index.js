import React, { Component } from 'react';
import { object } from 'prop-types';
import { withRouter } from 'react-router-dom';

import { APP_ROUTES } from '../../config/appConstants';
import { getLatestTime } from './helpers';
import './style.css';

class Dashboard extends Component {
  state = { time: getLatestTime() };

  componentDidMount() {
    this.timeUpdationInterval = setInterval(() => {
      this.setState(() => ({ time: getLatestTime() }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeUpdationInterval);
  }

  onClick = () => {
    this.props.history.push(APP_ROUTES.CONTACTS);
  };

  render() {
    const { time } = this.state;
    return (
      <div className="dashboard" onClick={this.onClick}>
        <p className="time">{time}</p>
      </div>
    );
  }
}

Dashboard.propTypes = {
  history: object.isRequired,
};

export default withRouter(Dashboard);
