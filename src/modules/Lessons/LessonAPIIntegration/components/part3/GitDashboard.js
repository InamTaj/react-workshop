import React, {Component, Fragment} from 'react';
import ReactLoader from 'react-loading';
import axios from 'axios';

import ErrorLoading from './ErrorLoading/ErrorLoading';
import Searchbox from './Searchbox/Searchbox';
import UserCard from './UserCard/UserCard';

import './GitDashboard.css';

class GitDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: true,
      errorLoading: false,
      searchQuery: '',
    };

    this.loadUsers = this.loadUsers.bind(this);
    this.loadUserRepos = this.loadUserRepos.bind(this);
    this.onQueryChange = this.onQueryChange.bind(this);
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

  onQueryChange(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  render() {
    const { isLoading, errorLoading, data, searchQuery } = this.state;
    const shouldShowResults = !isLoading && !errorLoading;

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
            shouldShowResults &&
              (
                  <Fragment>
                    <Searchbox query={searchQuery} onChangeCB={this.onQueryChange}/>
                    {
                      searchQuery && data.filter((user) => user.login.indexOf(searchQuery) > -1)
                        .map((user) => <UserCard key={user.id} user={user}/>)
                    }
                    { !searchQuery && data.map((user) => <UserCard key={user.id} user={user}/>) }
                  </Fragment>
              )
          }
        </div>
    );
  }
}

export default GitDashboard;
