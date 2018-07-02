import React, { Component } from 'react';
import ReactLoader from 'react-loading';
import axios from 'axios';

import ErrorLoading from './ErrorLoading/ErrorLoading';
import UserCard from './UserCard/UserCard';

import './GitDashboard.css';

class GitDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: true,
      errorLoading: false,
    };

    this.loadUsers = this.loadUsers.bind(this);
    this.loadUserRepos = this.loadUserRepos.bind(this);
  }

  componentWillMount() {
    this.loadUsers();
  }

  loadUsers() {
    axios.get('https://api.github.com/users')
        .then(({data}) => {
          this.setState({
            isLoading: !this.state.isLoading,
            data,
          });
        })
        .catch(response => {
          console.error('Error while fetching Users..', response);
          this.setState({
            isLoading: !this.state.isLoading,
            errorLoading: response,
          });
        });
  }

  loadUserRepos(repoURL) {
    // load repos
  }

  render() {
    const { isLoading, errorLoading, data } = this.state;

    return (
        <div className="git-dashboard">
          <h4 className="title">Git Dashboard</h4>
          {
            isLoading && <ReactLoader color="#000000" type="spin" className="loader" />
          }
          {
            errorLoading && <ErrorLoading error={errorLoading} />
          }
          {
            !isLoading && !errorLoading &&
              data.map((user) => <UserCard key={user.id} user={user}/>)
          }
        </div>
    );
  }
}

export default GitDashboard;
