import React, { Component } from 'react';

class GitDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  render() {
    return (
        <h4>Git Dashboard</h4>
    );
  }
}

export default GitDashboard;